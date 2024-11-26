import Items from '@/data/items.json';
import { ItemInt } from '@/components/Card';

interface Category {
    categoryName: string;
    generalSynonyms: string[];
    items: ItemInt[];
}

interface ItemsData {
    categories: {
        [key: string]: Category;
    };
    globalAttributes: {
        colors: { [key: string]: { synonyms: string[] } };
        materials: { [key: string]: { synonyms: string[] } };
        measurements: {
            synonyms: {
                metros: string[];
                centimetros: string[];
            };
        };
    };
}

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

const areSimilarWords = (word1: string, word2: string): boolean => {
    if (word1.length < 4 || word2.length < 4) return false;
    const maxDistance = Math.floor(Math.max(word1.length, word2.length) * 0.3);
    const distance = getLevenshteinDistance(word1, word2);
    return distance <= maxDistance;
};

const checkSynonyms = (searchWord: string, synonymsArrays: string[][]): boolean => {
    return synonymsArrays.some(synonymArray => 
        synonymArray.some(synonym =>
            synonym.toLowerCase().includes(searchWord) || 
            searchWord.includes(synonym.toLowerCase()) ||
            areSimilarWords(synonym.toLowerCase(), searchWord)
        )
    );
};

const getAllItemSynonyms = (category: Category, item: ItemInt): string[][] => {
    const itemsData = Items as ItemsData;
    
    const colorSynonyms = item.specifications.colors
        .map(color => itemsData.globalAttributes.colors[color]?.synonyms || []);
    
    const materialSynonym = item.specifications.material
        ? itemsData.globalAttributes.materials[item.specifications.material]?.synonyms || []
        : [];

    const synonymArrays: string[][] = [
        category.generalSynonyms,
        item.specificSynonyms?.type || [],
        item.specificSynonyms?.style || [],
        item.specificSynonyms?.features || [],
        item.specificSynonyms?.size || [],
        ...colorSynonyms,
        materialSynonym,
        itemsData.globalAttributes.measurements.synonyms.metros,
        itemsData.globalAttributes.measurements.synonyms.centimetros
    ];

    return synonymArrays.filter(arr => arr && arr.length > 0);
};

export const searchItems = (searchTerm: string): ItemInt[] => {
    const searchWords = searchTerm.toLowerCase().trim().split(' ');
    let results: ItemInt[] = [];

    Object.values((Items as ItemsData).categories).forEach(category => {
        const categoryResults = category.items.filter(item => {
            const itemName = item.name.toLowerCase();
            const itemDetail = item.detail.toLowerCase();
            const allSynonyms = getAllItemSynonyms(category, item);

            // Verificar coincidencias en nombre
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
    return results.sort((a, b) => {
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
    });
};

export const findSimilarItems = (item: ItemInt): ItemInt[] => {
    const allItems = Object.values((Items as ItemsData).categories)
        .flatMap(category => category.items as ItemInt[]);
    
    const similarItems = allItems.filter(otherItem => {
        if (otherItem.id === item.id) return false;

        // Comparar características similares
        const sameCategory = Object.values((Items as ItemsData).categories).some(category =>
            category.items.some(i => i.id === item.id) &&
            category.items.some(i => i.id === otherItem.id)
        );

        const sharedColors = item.specifications.colors.some(color =>
            otherItem.specifications.colors.includes(color)
        );

        const sameMaterial = item.specifications.material === otherItem.specifications.material;

        const sharedFeatures = item.specifications.features.some(feature =>
            otherItem.specifications.features.includes(feature)
        );

        return (sameCategory && (sharedColors || sameMaterial || sharedFeatures));
    });

    return similarItems.slice(0, 3);
}; 