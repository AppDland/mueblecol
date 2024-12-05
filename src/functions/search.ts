import { ItemInt, ItemsData } from '@/interfaces/item';
import Items from '@/data/items.json';

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

export const searchItems = (searchTerm: string): ItemInt[] => {
    const searchTermLower = searchTerm.toLowerCase();
    const results: ItemInt[] = [];
    const typedItems = Items as unknown as ItemsData;

    Object.values(typedItems.rooms).forEach(room => {
        const roomMatchesSearch = room.generalSynonyms.some(
            (synonym: string) => synonym.toLowerCase().includes(searchTermLower)
        );

        room.items.forEach(item => {
            const nameMatches = item.name.toLowerCase().includes(searchTermLower);
            const detailMatches = item.detail?.toLowerCase().includes(searchTermLower) || false;
            
            const synonymMatches = item.specificSynonyms 
                ? Object.values(item.specificSynonyms).some(
                    synonymArray => synonymArray?.some(
                        (synonym: string) => synonym.toLowerCase().includes(searchTermLower)
                    )
                ) 
                : false;

            if (nameMatches || detailMatches || synonymMatches || roomMatchesSearch) {
                results.push(item);
            }
        });
    });

    return results;
};

export const findSimilarItems = (item: ItemInt): ItemInt[] => {
    const typedItems = Items as unknown as ItemsData;
    const allItems = Object.values(typedItems.rooms)
        .flatMap(room => room.items);
    
    const similarItems = allItems.filter(otherItem => {
        if (otherItem.id === item.id) return false;

        // Comparar características similares
        const sameRoom = Object.values(typedItems.rooms).some(room =>
            room.items.some(i => i.id === item.id) &&
            room.items.some(i => i.id === otherItem.id)
        );

        const sharedColors = item.specifications.colors.some((color: string) =>
            otherItem.specifications.colors.includes(color)
        );

        const sameMaterial = item.specifications.material === otherItem.specifications.material;

        const sharedFeatures = item.specifications.features.some((feature: string) =>
            otherItem.specifications.features.includes(feature)
        );

        return (sameRoom && (sharedColors || sameMaterial || sharedFeatures));
    });

    return similarItems.slice(0, 3);
}; 