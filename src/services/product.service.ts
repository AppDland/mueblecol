import { ProductProps } from "@/interfaces/item";
import axios from "axios";

export const getProduct = async (id: string) => {
    try {
        console.log(process.env.API_URL, id);
        const res = await axios.get(`${process.env.API_URL}/products/${id}`);
        console.log(res.data);
        return res.data as ProductProps;
    } catch (error) {
        return null;
    }
}



