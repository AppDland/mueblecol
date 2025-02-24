import { ItemInt } from "@/interfaces/item";

interface Zone {
    id: number;
    name: string;
    imageUrl: string;
}

interface Meta {
    limit: number;
    page: number;
}

export const getZones = async () => {
    console.log(process.env.API_URL);
    const response = await fetch(`${process.env.API_URL}/zones`);
    const data = await response.json();
    return data as Zone[];
}

export const getProductsByZone = async (zone: string, meta: Meta) => {
    const response = await fetch(`${process.env.API_URL}/products/zone/${zone}?limit=${meta.limit}&page=${meta.page}`);
    const data = await response.json();
    return data.data as ItemInt[];
}
