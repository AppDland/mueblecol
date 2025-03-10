import Image from "next/image";
import { ProductBaseProps } from "@/interfaces/product";
import { Navigate } from "../Navigate/Navigate";


const BigCard = ({ product }: { product: ProductBaseProps }) => {


    return (
        <div
            className="flex place-self-center w-11/12 rounded-lg my-8 sm:mx-6 overflow-hidden"
            style={{
                maxWidth: '500px',
                boxShadow: '0px 0px 15px 1px rgba(0,0,0,0.1)'
            }}
        >
            <div className="w-2/5 h-56 sm:h-72 relative">
                <Image
                    src={product.ProductPhotos.length > 0 ? product.ProductPhotos[0].cloudUrl : '/images/fallback.png'}
                    fill
                    alt={product.productName}
                    className="object-cover"
                    sizes="100%"
                />
            </div>
            <div className="w-3/5 p-4 grid grid-rows-[auto_1fr_auto] gap-2">
                <p className="text-secondary row-span-1">De los más comprados</p>
                <h3 className="text-third font-bold text-xl truncate-2-lines row-span-1 self-center">{product.productName}</h3>
                <Navigate href={`/productos/${product.slug}/${product.id}`} scroll className="row-span-1">
                    <button className="btn-primary">
                        ¡Lo quiero ahora!
                    </button>
                </Navigate>
            </div>
        </div>
    )
}

export { BigCard };