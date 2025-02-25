import { ProductProps } from "@/interfaces/product";
import axios from "axios";
import { MetaRequest, MetaResponse, metaBuilder } from "./meta";

interface SearchResponse {
    data: ProductProps[];
    meta: MetaResponse;
}

export const getProduct = async (id: string) => {
    try {
        const res = await axios.get(`${process.env.API_URL}/products/${id}`);
        return res.data as ProductProps;
    } catch (error) {
        return null;
    }
}

export const searchProducts = async (query: string, meta: MetaRequest) => {
    try {
        const res = await axios.get(`${process.env.API_URL}/products/search/${query}?${metaBuilder(meta)}`);
        return res.data as SearchResponse;
    } catch (error) {
        return null;
    }
}

