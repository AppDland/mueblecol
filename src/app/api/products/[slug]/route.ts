import { getProduct } from "@/services/product.service";
import { NextResponse } from "next/server";


// obtiene el producto aunque diga slug, se trata de un id
// si no existe, devuelve un 404
// si existe redirige a la pagina de producto slug/id
export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const product = await getProduct(slug);
    if (!product) {
        return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });
    }
    return NextResponse.redirect(new URL(`/productos/${product.slug}/${product.id}`, request.url));
}

