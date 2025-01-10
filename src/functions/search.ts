import { ItemInt, ItemsData } from '@/interfaces/item';
import Items from '@/data/items.json';
import Ignoradas from '@/data/ignore.json';

/**
 * Calcula la distancia de Levenshtein entre dos strings
 * Esta distancia representa el número mínimo de operaciones necesarias para transformar un string en otro
 * Las operaciones pueden ser: inserción, eliminación o sustitución de un carácter
 */
const getLevenshteinDistance = (str1: string, str2: string): number => {
    // Creamos una matriz para almacenar las distancias parciales
    const matrix = Array(str2.length + 1).fill(null).map(() =>
        Array(str1.length + 1).fill(null)
    );

    // Inicializamos la primera fila y columna
    for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;

    // Calculamos las distancias para cada posición
    for (let j = 1; j <= str2.length; j++) {
        for (let i = 1; i <= str1.length; i++) {
            // Si los caracteres son iguales, no hay costo adicional
            const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
            matrix[j][i] = Math.min(
                matrix[j][i - 1] + 1,      // Inserción
                matrix[j - 1][i] + 1,      // Eliminación
                matrix[j - 1][i - 1] + indicator  // Sustitución
            );
        }
    }
    return matrix[str2.length][str1.length];
};

/**
 * Determina si dos palabras son similares basándose en la distancia de Levenshtein
 * Permite un margen de error del 30% de la longitud de la palabra más larga
 */
const areSimilarWords = (word1: string, word2: string): boolean => {
    // Ignoramos palabras muy cortas para evitar falsos positivos
    if (word1.length < 4 || word2.length < 4) return false;
    const maxDistance = Math.floor(Math.max(word1.length, word2.length) * 0.3);
    const distance = getLevenshteinDistance(word1, word2);
    return distance <= maxDistance;
};

export const searchItems = (searchTerm: string): ItemInt[] => {
    if (searchTerm.length < 4) return [];
    // Separamos los términos de búsqueda y los convertimos a minúsculas
    const searchWords = searchTerm.toLowerCase().trim().split(' ');
    const results: ItemInt[] = [];

    Items.items.forEach(item => {
        // Creamos un array con todas las palabras relevantes del item
        const itemName = item.publicName.toLowerCase();
        const itemDescription = item.description.toLowerCase();

        //creamos el array ignorando las palabras que tengan menos de 4 letras
        //por ultimo se excluyen palabras incluidas en la lista de palabras ignoradas
        const allWords = [
            ...itemName.split(' '),
            ...itemDescription.split(' '),
            ...item.synonyms,
            ...item.zones
        ]
            .filter(word => word.length >= 4)
            .filter(word => !Ignoradas.includes(word));

        // Un item coincide si al menos una palabra de búsqueda coincide con alguna palabra del item
        const matches = searchWords.some(searchWord => {
            return allWords.some(word => {
                const wordLower = word.toLowerCase();
                return wordLower.includes(searchWord) || // La palabra contiene el término de búsqueda
                    searchWord.includes(wordLower) || // El término de búsqueda contiene la palabra
                    areSimilarWords(wordLower, searchWord); // Las palabras son similares
            });
        });

        if (matches) {
            results.push(item);
        }
    });

    // Ordenamos los resultados por relevancia
    return results.sort((a, b) => {
        // Primero los que coinciden exactamente con el nombre
        const aNameMatch = a.publicName.toLowerCase().includes(searchTerm.toLowerCase());
        const bNameMatch = b.publicName.toLowerCase().includes(searchTerm.toLowerCase());

        if (aNameMatch && !bNameMatch) return -1;
        if (!aNameMatch && bNameMatch) return 1;

        // Luego por relevancia de sinónimos
        const aRelevance = a.synonyms.some(syn =>
            syn.toLowerCase().includes(searchTerm.toLowerCase()) ||
            searchTerm.toLowerCase().includes(syn.toLowerCase()) ||
            areSimilarWords(syn.toLowerCase(), searchTerm.toLowerCase())
        );
        const bRelevance = b.synonyms.some(syn =>
            syn.toLowerCase().includes(searchTerm.toLowerCase()) ||
            searchTerm.toLowerCase().includes(syn.toLowerCase()) ||
            areSimilarWords(syn.toLowerCase(), searchTerm.toLowerCase())
        );

        if (aRelevance && !bRelevance) return -1;
        if (!aRelevance && bRelevance) return 1;

        return 0;
    });
};

/**
 * Encuentra items similares basándose en zonas compartidas, colores y materiales
 */
export const findSimilarItems = (item: ItemInt): ItemInt[] => {
    const typedItems = Items as unknown as ItemsData;
    const allItems = typedItems.items;

    const similarItems = allItems.filter(otherItem => {
        if (otherItem.name === item.name) return false;

        // Un item es similar si comparte zona y además comparte color o material
        const sameZone = item.zones.some(zone =>
            otherItem.zones.includes(zone)
        );

        const sharedColors = item.media.some(media =>
            otherItem.media.some(otherMedia =>
                media.colorHex === otherMedia.colorHex
            )
        );

        let sameMaterial = false;
        if (item.attributes) {
            sameMaterial = item.attributes.some(attr =>
                otherItem.attributes && otherItem.attributes.some(otherAttr =>
                    attr.attributeId === otherAttr.attributeId &&
                    attr.value === otherAttr.value
                )
            );
        }

        return (sameZone && (sharedColors || sameMaterial));
    });

    // Limitamos a 3 items similares
    return similarItems.slice(0, 10);
}; 