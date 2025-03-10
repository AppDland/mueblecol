export interface MetaRequest {
    page?: number;
    limit?: number;
    orderBy?: 'asc' | 'desc';
    minPrice?: number;
    maxPrice?: number;
    material?: string;
}

export interface MetaResponse extends MetaRequest {
    finalPage: number;
    total: number;
    materialList: string[];
    query?: string;
    procedence?: 'cached' | 'database';
}

export const metaBuilder = (meta: MetaRequest) => {
    const metaString = Object.entries(meta)
        .filter(([key, value]) => value !== undefined)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
    return metaString;
}