import { getProduct } from '@/services/product.service';
import { notFound, redirect } from 'next/navigation';

export default async function ProductosPage({ params }: { params: Promise<{ slug: string }> }) {

    // el slug es el id del producto, de lo contrario se redirige a la pagina de error
    const id = (await params).slug;

    const product = await getProduct(id);

    if (!product) notFound();

    redirect(`/productos/${product.slug}/${id}`);
}
