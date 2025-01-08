export interface ItemMedia {
    // id: number;
    colorName: string;
    colorHex: string;
    photos: string[];
}

export interface AttributeValue {
    // id: number;
    attributeId: number;
    value: string;
}

export interface ItemInt {
    // id: number;
    name: string;
    publicName: string;
    price: number;
    offer: number | null;
    // stock: number;
    description: string;
    media: ItemMedia[];
    attributes?: AttributeValue[];
    synonyms: string[];
    zones: string[];
    finan: { cuotas: number, valor?: number };
}

export interface Attribute {
    id: number;
    name: string;
    type: string;
}

export interface ItemsData {
    items: ItemInt[];
    attributes: Attribute[];
    zones: {
        id: number;
        name: string;
    }[];
}