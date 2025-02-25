import { ProductBaseProps } from "@/interfaces/product";
import { MetaRequest, MetaResponse, metaBuilder } from "./meta";

interface Zone {
    id: number;
    name: string;
    imageUrl: string;
}


interface ProductResponse {
    data: ProductBaseProps[];
    meta: MetaResponse;
}

export const getZones = async () => {
    try {
        const response = await fetch(`${process.env.API_URL}/zones`);
        const data = await response.json();
        return data as Zone[];
    } catch (error) {
        return null;
    }
}

export const getProductsByZone = async (zone: string, meta: MetaRequest) => {
    try {
        const response = await fetch(`${process.env.API_URL}/products/zone/${zone}?${metaBuilder(meta)}`);
        const data = await response.json();
        return data as ProductResponse;
    } catch (error) {
        return null;
    }
}


