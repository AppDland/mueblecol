import { ProductProps } from "@/interfaces/item";
import axios from "axios";

export const getProduct = async (id: string) => {
    try {
        const res = await axios.get(`${process.env.API_URL}/products/${id}`);
        return res.data as ProductProps;
    } catch (error) {
        return null;
    }
}



