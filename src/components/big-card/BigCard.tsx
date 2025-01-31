import Image from "next/image";
import { ItemInt } from "@/interfaces/item";
import Link from "next/link";


const BigCard = (item: ItemInt) => {


    return (
        <div
            className="flex place-self-center w-11/12 rounded-lg m-8 overflow-hidden"
            style={{
                maxWidth: '500px',
                boxShadow: '0px 0px 15px 2px rgba(0,0,0,0.2)'
            }}
        >
            <div className="w-2/5 h-56 sm:h-72 relative">
                <Image
                    src={item.media[0].photos[0]}
                    fill
                    alt={item.publicName}
                    className="object-cover"
                    sizes="100%"
                />
            </div>
            <div className="w-3/5 p-4 grid grid-rows-[auto_1fr_auto] gap-2">
                <p className="text-secondary row-span-1">De los más comprados</p>
                <h3 className="text-third font-bold text-xl truncate-2-lines row-span-1 self-center">{item.publicName}</h3>
                <Link href={`/articulos/${item.name}`} scroll className="row-span-1">
                    <button className="btn-primary">
                        ¡Lo quiero ahora!
                    </button>
                </Link>
            </div>
        </div>
    )
}

export { BigCard };