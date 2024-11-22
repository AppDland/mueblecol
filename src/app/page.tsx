'use client';

import Button from "@/components/Button";
import Card, { ItemInt } from "@/components/Card";
import Finder from "@/components/Finder";
import Kart from "@/components/kart";
import Items from "@/data/items.json";
import Intro from "@/modules/Intro";
import { useState } from "react";

interface GlobalAttributes {
  colors: {
    [key: string]: {
      name: string;
      synonyms: string[];
    };
  };
  materials: {
    [key: string]: {
      name: string;
      synonyms: string[];
    };
  };
  measurements: {
    synonyms: {
      [key: string]: string[];
    };
  };
}

interface Specifications {
  material?: string;
  height?: number;
  width?: number;
  depth?: number;
  colors: string[];
  features: string[];
  pieces?: string[];
}

interface SpecificSynonyms {
  size?: string[];
  features?: string[];
  type?: string[];
  style?: string[];
  pieces?: string[];
}

interface ItemWithDetails extends ItemInt {
  id: string;
  specifications: Specifications;
  detail: string;
  specificSynonyms: SpecificSynonyms;
}

interface Category {
  categoryName: string;
  generalSynonyms: string[];
  items: ItemWithDetails[];
}

interface ItemsData {
  categories: {
    [key: string]: Category;
  };
  globalAttributes: GlobalAttributes;
}

export default function Home() {
    const [text, setText] = useState('');
    const [found, setFound] = useState<ItemInt[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Calcular índices para la paginación
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = found.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(found.length / itemsPerPage);

    const handleFind = () => {
        const searchTerm = text.toLowerCase().trim();
        const searchWords = searchTerm.split(' ');
        
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

        // Función mejorada para verificar coincidencias con sinónimos
        const checkSynonyms = (searchWord: string, synonymsArrays: string[][]): boolean => {
            return synonymsArrays.some(synonymArray => 
                synonymArray.some(synonym =>
                    synonym.toLowerCase().includes(searchWord) || 
                    searchWord.includes(synonym.toLowerCase()) ||
                    areSimilarWords(synonym.toLowerCase(), searchWord)
                )
            );
        };

        // Función para obtener todos los sinónimos relevantes de un item
        const getAllItemSynonyms = (category: Category, item: ItemWithDetails): string[][] => {
            const itemsData = Items as unknown as ItemsData;
            
            const colorSynonyms = item.specifications.colors
                .map(color => itemsData.globalAttributes.colors[color]?.synonyms || []);
            
            const materialSynonym = item.specifications.material
                ? itemsData.globalAttributes.materials[item.specifications.material]?.synonyms || []
                : [];

            const synonymArrays: string[][] = [
                category.generalSynonyms,
                ...Object.values(item.specificSynonyms).filter((arr): arr is string[] => arr !== undefined),
                ...colorSynonyms,
                materialSynonym,
                itemsData.globalAttributes.measurements.synonyms.metros || [],
                itemsData.globalAttributes.measurements.synonyms.centimetros || []
            ];

            return synonymArrays.filter(arr => arr && arr.length > 0);
        };

        let results: ItemWithDetails[] = [];

        // Buscar en todas las categorías
        Object.values((Items as ItemsData).categories).forEach(category => {
            const categoryResults = category.items.filter(item => {
                const itemName = item.name.toLowerCase();
                const itemDetail = item.detail.toLowerCase();
                const allSynonyms = getAllItemSynonyms(category, item);

                // Verificar coincidencias en nombre y sinónimos
                const nameMatches = searchWords.some(searchWord => {
                    const nameWords = itemName.split(' ');
                    return nameWords.some(nameWord => 
                        nameWord.includes(searchWord) || 
                        searchWord.includes(nameWord) || 
                        areSimilarWords(nameWord, searchWord) ||
                        checkSynonyms(searchWord, allSynonyms)
                    );
                });

                if (nameMatches) return true;

                // Verificar coincidencias en descripción
                return searchWords.some(searchWord => {
                    const detailWords = itemDetail.split(' ');
                    return detailWords.some(detailWord => 
                        detailWord.includes(searchWord) || 
                        searchWord.includes(detailWord) || 
                        areSimilarWords(detailWord, searchWord) ||
                        checkSynonyms(searchWord, allSynonyms)
                    );
                });
            });

            results = [...results, ...categoryResults];
        });

        // Ordenar resultados
        const sortedResults = results
            .sort((a, b) => {
                const aNameMatch = a.name.toLowerCase().includes(searchTerm);
                const bNameMatch = b.name.toLowerCase().includes(searchTerm);
                
                if (aNameMatch && !bNameMatch) return -1;
                if (!aNameMatch && bNameMatch) return 1;

                // Ordenar por categoría si ambos coinciden igual
                const aCategory = Object.values((Items as ItemsData).categories).find(cat => 
                    cat.items.includes(a)
                )?.categoryName;
                const bCategory = Object.values((Items as ItemsData).categories).find(cat => 
                    cat.items.includes(b)
                )?.categoryName;

                return (aCategory || '').localeCompare(bCategory || '');
            })
            .map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                images: item.images,
                specifications: item.specifications,
                detail: item.detail,
                specificSynonyms: item.specificSynonyms
            }));

        setFound(sortedResults);
    }

    return (
        <>
            <Intro />
            <div className="flex flex-col relative w-full max-w-7xl mx-auto px-4">
                <Finder value={text} setValue={setText} onFind={handleFind} />
                
                {/* Contador de páginas */}
                {found.length > 0 && (
                    <div className="self-end text-sm text-gray-500 mb-4">
                        Página {currentPage} de {totalPages}
                    </div>
                )}

                {/* Grid de productos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {currentItems.map((item, index) => (
                        <Card item={item} key={index} />
                    ))}
                </div>

                {/* Paginación */}
                {found.length > itemsPerPage && (
                    <div className="flex justify-center items-center gap-2 my-8">
                        {/* Botón Previous */}
                        {currentPage > 1 && (
                            <button 
                                onClick={() => setCurrentPage(prev => prev - 1)}
                                className="p-2 rounded-full hover:bg-gray-100"
                                aria-label="Página anterior"
                            >
                                ←
                            </button>
                        )}
                        
                        {/* Números de página */}
                        {[...Array(totalPages)].map((_, i) => {
                            const pageNumber = i + 1;
                            
                            // Mostrar primera página, última página, página actual y páginas adyacentes
                            if (
                                pageNumber === 1 || 
                                pageNumber === totalPages ||
                                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                            ) {
                                return (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentPage(pageNumber)}
                                        className={`w-8 h-8 rounded-full ${
                                            currentPage === pageNumber 
                                                ? 'bg-gray-200' 
                                                : 'hover:bg-gray-100'
                                        }`}
                                    >
                                        {pageNumber}
                                    </button>
                                );
                            }
                            
                            // Mostrar puntos suspensivos
                            if (
                                pageNumber === currentPage - 2 ||
                                pageNumber === currentPage + 2
                            ) {
                                return <span key={i} className="px-2">...</span>;
                            }
                            
                            return null;
                        })}

                        {/* Botón Next */}
                        {currentPage < totalPages && (
                            <button 
                                onClick={() => setCurrentPage(prev => prev + 1)}
                                className="p-2 rounded-full hover:bg-gray-100"
                                aria-label="Página siguiente"
                            >
                                →
                            </button>
                        )}
                    </div>
                )}

                <Button 
                    className="fixed bottom-5 right-5"
                    iconSrc="kart.svg"
                    width="60px"
                    height="60px"
                    iconHeight={50}
                    iconWidth={50}
                    iconColor="red-500"
                />
            </div>
            <div className="mt-24">
                <Kart />
            </div>
        </>
    );
}
