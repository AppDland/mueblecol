export interface CartProps {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    total: number;
    CartItem: CartItemProps[];
}

export interface CartItemProps {
    id: string;
    quantity: number;
    reservedAt: Date;
    product: ProductProps;
    priceSnapshot: PriceSnapshotProps;
}

interface ProductProps {
    id: string;
    productName: string;
    stock: number;
    stockReserved: number;
    ProductPhotos: { cloudUrl: string }[];
}

interface PriceSnapshotProps {
    financialPrice: number;
    firstPayment: number;
    monthPayment: number;
    mountOfPayments: number;
    offerPrice?: number;
    onePaymentPrice?: number;
}

