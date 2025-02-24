import { getProduct } from "@/services/product.service";
import { NextResponse } from "next/server";


// obtiene el producto con el id
// si no existe, devuelve un 404
// si existe, devuelve el producto
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    const product = await getProduct(id);
    if (!product) {
        return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });
    }
    return NextResponse.json(product);
}


