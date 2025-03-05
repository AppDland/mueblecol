import Image from "next/image";
import { money } from "../../functions/money";
import classNames from "classnames";
import { ProductBaseProps } from "@/interfaces/product";
import { Navigate } from "../Navigate/Navigate";

interface SimpleCardProps {
    product: ProductBaseProps;
}

const SimpleCard = ({ product }: SimpleCardProps) => {

    return (
        <div className={classNames(
            "bg-white group border",
            "w-36 sm:w-48 md:w-52",
            "h-64 sm:h-72 md:h-96",
            "md:m-3"
        )}
        >
            <Navigate
                href={`/productos/${product.slug}/${product.id}`}
                className={classNames(
                    "grid  grid-cols-1 h-full",
                    "grid-rows-[1fr_auto_auto] md:grid-rows-[auto_1fr_auto_auto]"
                )}
            >
                <div
                    className={classNames(
                        "flex justify-center items-center",
                        "md:bg-accent md:group-hover:bg-primary md:text-white",
                        "order-1 md:order-none",
                        "py-1 md:py-2"
                    )}
                >
                    {
                        product.monthPayment === product.firstPayment ? (
                            <p className='text-xs sm:text-sm'>{product.mountOfPayments} cuotas de {money(product.monthPayment)}</p>
                        ) : (
                            <p className='text-xs sm:text-sm'>Hasta en {product.mountOfPayments} cuotas</p>
                        )
                    }
                </div>
                <div className={classNames(
                    "relative",
                    "md:order-none"
                )}>
                    <Image
                        src={product.ProductPhotos.length > 0 ? product.ProductPhotos[0].cloudUrl : '/images/fallback.png'}
                        alt={product.productName}
                        fill
                        sizes="500px"
                        className="object-cover object-center p-0"
                    />
                </div>
                <p className={classNames(
                    "px-2 py-1 md:py-2 text-center truncate whitespace-nowrap md:group-hover:text-primary",
                    "md:border-t",
                    "text-sm md:text-base"
                )}>
                    {product.productName}
                </p>
                <p className={classNames(
                    "text-center py-1 md:py-2 text-accent font-bold md:group-hover:text-primary",
                    "text-base md:text-xl"
                )}
                >
                    {money(product.financialPrice)}
                </p>
            </Navigate>
        </div>
    );
};

export { SimpleCard };