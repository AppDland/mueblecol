import { money } from "@/functions/money";
import { ProductBaseProps } from "@/interfaces/item";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
    item: ProductBaseProps;
}

const Card = ({ item }: CardProps) => {

    return (
        <div className='border-b sm:border-none sm:rounded-lg border-gray-200 min-w-44 max-w-60'>
            <Link
                href={`/productos/${item.slug}/${item.id}`}
                className={classNames(
                    "bg-white flex px-5 sm:flex sm:flex-col py-6",
                    // "w-full sm:w-48",
                    "h-40 sm:h-80",
                )}
            >
                <div className={classNames(
                    "overflow-hidden relative rounded-lg",
                    "w-2/5 sm:w-full",
                    "sm:h-3/5"
                )}>
                    <Image
                        src={item.ProductPhotos.length > 0 ? item.ProductPhotos[0].cloudUrl : '/images/fallback.png'}
                        alt={item.productName}
                        fill
                        sizes="200px"
                        className="object-cover"
                        blurDataURL='/images/fallback.png'
                        priority
                    />
                </div>
                <div className={classNames(
                    'px-3',
                    'w-3/5 sm:w-full',
                    'sm:h-2/5',
                )}>
                    <h3 className="font-medium text-sm truncate-2-lines mb-3 sm:mt-3">
                        {item.productName}
                    </h3>
                    {
                        item.monthPayment === item.firstPayment ? (
                            <p className='text-xs sm:text-sm italic truncate'>{item.mountOfPayments + 1} cuotas de {money(item.monthPayment)}</p>
                        ) : (
                            <p className='text-xs sm:text-sm italic truncate'>Hasta en {item.mountOfPayments + 1} cuotas</p>
                        )
                    }
                    <p className="text-lg sm:text-xl my-3">
                        {money(item.financialPrice)}
                    </p>
                </div>
            </Link>
        </div>
    );
}

export { Card };