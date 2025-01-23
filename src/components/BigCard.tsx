import Image from "next/image";
import Button from "./Button";
import { ItemInt } from "@/interfaces/item";
import Link from "next/link";


const BigCard = (item: ItemInt) => {


    return (
        <div
            className="flex place-self-center w-11/12 rounded-lg shadow-lg bg-gray-100 m-8 overflow-hidden"
            style={{ maxWidth: '500px' }}
        >
            <div className="w-2/5 h-56 sm:h-72 relative">
                <Image
                    src={item.media[0].photos[0]}
                    fill
                    alt={item.publicName}
                    className="object-cover"
                />
            </div>
            <div className="w-3/5 p-4 flex justify-center flex-col">
                <p className="text-secondary my-2">De los más comprados</p>
                <h3 className="text-third font-bold text-xl my-2">{item.publicName}</h3>
                <Link href={`/articulos/${item.name}`} scroll>
                    <Button
                        className="bg-primary hover:bg-secondary text-white py-2 px-8 rounded-full my-2 w-fit"
                        text="¡Lo quiero ahora!"
                    />
                </Link>
            </div>
        </div>
    )
}

export default BigCard;