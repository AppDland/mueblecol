'use client';

import Button from "@/components/Button";
import Card, { ItemInt } from "@/components/Card";
import Finder from "@/components/Finder";
import Kart from "@/components/kart";
import Items from "@/data/items.json";
import Intro from "@/modules/Intro";
import { useState } from "react";

interface ItemWithDetails extends ItemInt {
  detail?: string;
  synonyms?: string[];
}

export default function Home() {
    const [text, setText] = useState('');
    const [found, setFound] = useState<ItemInt[]>([]);
    
    const handleFind = () => {
        const searchTerm = text.toLowerCase().trim();
        
        // Función para calcular la distancia de Levenshtein entre dos strings
        const getLevenshteinDistance = (str1: string, str2: string): number => {
            const matrix = Array(str2.length + 1).fill(null).map(() => 
                Array(str1.length + 1).fill(null)
            );

            for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
            for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;

            for (let j = 1; j <= str2.length; j++) {
                for (let i = 1; i <= str1.length; i++) {
                    const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
                    matrix[j][i] = Math.min(
                        matrix[j][i - 1] + 1,
                        matrix[j - 1][i] + 1,
                        matrix[j - 1][i - 1] + indicator
                    );
                }
            }
            return matrix[str2.length][str1.length];
        };

        // Función para determinar si dos palabras son similares
        const areSimilarWords = (word1: string, word2: string): boolean => {
            if (word1.length < 4 || word2.length < 4) return false;
            const maxDistance = Math.floor(Math.max(word1.length, word2.length) * 0.3);
            const distance = getLevenshteinDistance(word1, word2);
            return distance <= maxDistance;
        };

        // Función para verificar coincidencias con sinónimos
        const checkSynonyms = (searchWord: string, synonyms: string[]): boolean => {
            return synonyms.some(synonym => 
                synonym.toLowerCase().includes(searchWord) || 
                searchWord.includes(synonym.toLowerCase()) ||
                areSimilarWords(synonym.toLowerCase(), searchWord)
            );
        };

        const results = Items.filter((item: ItemWithDetails) => {
            const itemName = item.name.toLowerCase();
            const itemDetail = (item.detail || '').toLowerCase();
            const searchWords = searchTerm.split(' ');
            const synonyms = item.synonyms || [];
            
            // Primero buscamos coincidencias en el nombre
            const nameMatches = searchWords.some(searchWord => {
                const nameWords = itemName.split(' ');
                return nameWords.some(nameWord => 
                    nameWord.includes(searchWord) || 
                    searchWord.includes(nameWord) || 
                    areSimilarWords(nameWord, searchWord) ||
                    checkSynonyms(searchWord, synonyms)
                );
            });

            // Si hay coincidencia en el nombre, le damos prioridad
            if (nameMatches) return true;

            // Si no hay coincidencia en el nombre, buscamos en la descripción
            return searchWords.some(searchWord => {
                const detailWords = itemDetail.split(' ');
                return detailWords.some(detailWord => 
                    detailWord.includes(searchWord) || 
                    searchWord.includes(detailWord) || 
                    areSimilarWords(detailWord, searchWord) ||
                    checkSynonyms(searchWord, synonyms)
                );
            });
        });

        // Ordenamos los resultados para dar prioridad a las coincidencias en el nombre
        const sortedResults = results.sort((a, b) => {
            const aNameMatch = a.name.toLowerCase().includes(searchTerm);
            const bNameMatch = b.name.toLowerCase().includes(searchTerm);
            
            if (aNameMatch && !bNameMatch) return -1;
            if (!aNameMatch && bNameMatch) return 1;
            return 0;
        });

        setFound(sortedResults);
    }

    return (
        <>
            <Intro />
            <div className="flex flex-wrap relative">
                <Finder value={text} setValue={setText} onFind={handleFind} />
                {
                    found.map((item, index) => (
                        <Card item={item} key={index} />
                    ))
                }
                <Button 
                className="absolute right-5 mt-4 "
                iconSrc="kart.svg"
                width="60px"
                height="60px"
                iconHeight={50}
                iconWidth={50}
                iconColor="red-500"
                />
            </div>
            <div className="mt-24 ">
                <Kart />
            </div>
        </>
    );
}
