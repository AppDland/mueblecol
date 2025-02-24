export interface ItemMedia {
    // id: number;
    cloudUrl: string;
}

export interface AttributeValue {
    // id: number;
    attributeId: number;
    value: string;
}

export interface ItemInt {
    id: string;
    slug: string;
    productName: string;
    description: string;
    offerPrice: number | null;
    financialPrice: number;
    firstPayment: number;
    mountOfPayments: number;
    monthPayment: number;
    synonyms: string[];
    ProductPhotos: ItemMedia[];
    attributes?: AttributeValue[];
    zones: string[];
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