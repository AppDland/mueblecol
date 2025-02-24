export interface ItemMedia {
    // id: number;
    cloudUrl: string;
}

export interface AttributeValue {
    // id: number;
    attributeId: number;
    value: string;
}

export interface ProductBaseProps {
    id: string;
    slug: string;
    productName: string;
    offerPrice: number | null;
    financialPrice: number;
    monthPayment: number;
    mountOfPayments: number;
    firstPayment: number;
    ProductPhotos: ItemMedia[];
}

export interface ProductProps extends ProductBaseProps {
    description: string;
    attributes?: AttributeValue[];
}

export interface Attribute {
    id: number;
    name: string;
    type: string;
}

export interface ItemsData {
    items: ProductBaseProps[];
    attributes: Attribute[];
    zones: {
        id: number;
        name: string;
    }[];
}