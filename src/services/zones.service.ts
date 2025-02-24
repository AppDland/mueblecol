import { ProductBaseProps } from "@/interfaces/item";

interface Zone {
    id: number;
    name: string;
    imageUrl: string;
}

interface MetaRequest {
    page?: number;
    limit?: number;
    orderBy?: 'asc' | 'desc';
    minPrice?: number;
    maxPrice?: number;
    material?: string;
}

interface MetaResponse extends MetaRequest {
    finalPage: number;
    total: number;
    materialList: string[];
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

const metaBuilder = (meta: MetaRequest) => {
    const metaString = Object.entries(meta)
        .filter(([key, value]) => value !== undefined)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
    return metaString;
}
