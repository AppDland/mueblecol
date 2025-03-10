export interface ItemMedia {
    // id: number;
    cloudUrl: string;
}

export interface AttributeValue {
    name: string;
    value: string;
}

export interface ProductBaseProps {
    id: string;
    slug: string;
    productName: string;
    offerPrice: number | null;
    financialPrice: number;
    firstPayment: number;
    mountOfPayments: number;
    monthPayment: number;
    ProductPhotos: ItemMedia[];
}

export interface ProductProps extends ProductBaseProps {
    description: string;
    ZoneItem: string[];
    AttributeValue?: AttributeValue[];
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

export interface FilterProductsParams {
    page?: string;
    orderBy?: 'asc' | 'desc';
    minPrice?: string;
    maxPrice?: string;
}