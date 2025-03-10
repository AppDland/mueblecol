import { money } from '@/functions/money';
import classNames from 'classnames';
import { BuyButton, ImageSlider } from '@/components';
import { MobileImageSlider } from '@/components/image-slider/MobileImageSlider';
import { notFound, redirect } from 'next/navigation';
import { getProduct } from '@/services/product.service';



interface Props {
    params: Promise<{
        slug: string;
        id: string;
    }>
}

async function ProductPage({ params }: Props) {
    // Obtenemos el producto usando el ID
    const { id, slug } = await params;
    const product = await getProduct(id);

    // Si no existe el producto, redirigimos a 404
    if (!product) {
        notFound();
    }

    // Verificamos que el slug en la URL coincida con el del producto
    if (product.slug !== slug) {
        // Si no coincide, redirigimos a la URL correcta
        redirect(`/productos/${product.slug}/${product.id}`);
    }

    return (
        <section className='section'>
            {/* Contenido principal */}
            <div className='grid grid-cols-5 gap-4 md:px-8 place-self-center'>
                <MobileImageSlider
                    images={product.ProductPhotos.map(photo => photo.cloudUrl)}
                    article={product.productName}
                    className='col-span-5 block md:hidden max-w-2xl'
                />
                <ImageSlider
                    images={product.ProductPhotos.map(photo => photo.cloudUrl)}
                    article={product.productName}
                    className='xl:place-self-center col-span-3 max-w-2xl hidden md:block'
                />
                <div
                    className={classNames(
                        'col-span-5 md:col-span-2 max-w-2xl',
                        'grid grid-rows-[auto_1fr_auto] gap-4 p-4'
                    )}
                >
                    <h1 className='h1'>{product.productName}</h1>
                    <div className='content-center grid gap-2'>
                        <h2 className='h2 px-0'>Financiamiento</h2>
                        <p>
                            ¿Qué estás esperando? Puedes obtener este artículo con una financiación muy flexible.
                        </p>
                        <p>
                            Puedes llevarlo pagando <span className='font-bold'>{money(product.firstPayment)}</span> como pago inicial
                        </p>
                        <p>
                            Después pagarías <span className='font-bold'>{product.mountOfPayments} cuotas de {money(product.monthPayment)}</span>
                        </p>
                    </div>
                    <div>
                        <p className='text-3xl font-bold text-primary my-5'>{money(product.financialPrice)}</p>
                        <BuyButton productPath={`${product.slug}/${product.id}`} />
                    </div>
                </div>
            </div>

            {/* Descripción del artículo */}
            <div className='my-10 px-6'>
                <h2 className='h2 px-0'>Acerca de este artículo</h2>
                <p>{product.description}</p>
            </div>

            {/* ATRIBUTOS */}
            {product.AttributeValue && product.AttributeValue.length > 0 && <Attributes attributes={product.AttributeValue} />}


        </section>
    )
};

interface attributesInt {
    name: string;
    value: string;
}

const Attributes = ({ attributes }: { attributes: attributesInt[] }) => (
    <div className='my-10 px-6 w-full max-w-2xl'>
        <h2 className='h2 px-0'>Características</h2>
        <div>
            {
                attributes.map((attr, id) => (
                    <span key={id} className={classNames(
                        'grid grid-cols-2 gap-2 p-2',
                        id % 2 === 0 ? 'bg-neutral-200' : 'bg-neutral-100'
                    )}>
                        <p className='opacity-80'>{attr.name}</p>
                        <p className='font-semibold'>{attr.value}</p>
                    </span>
                ))
            }
        </div>
    </div>
)

export default ProductPage;