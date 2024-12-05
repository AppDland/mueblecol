export interface ItemInt {
    id: string;
    name: string;
    price: number;
    images: string[];
    specifications: {
        material?: string;
        height?: number;
        width?: number;
        depth?: number;
        colors: string[];
        features: string[];
        pieces?: string[];
    };
    detail: string;
    specificSynonyms?: {
        type?: string[];
        style?: string[];
        features?: string[];
        size?: string[];
        pieces?: string[];
    };
}

export interface ItemsData {
    rooms: {
        [key: string]: {
            roomName: string;
            generalSynonyms: string[];
            items: ItemInt[];
        };
    };
    globalAttributes: {
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
    };
}