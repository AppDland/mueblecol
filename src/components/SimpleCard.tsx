import Image from "next/image";
import { money } from '../functions/money';

interface SimpleCardProps {
    image: string;
    title: string;
    color: string;
    price: number;
}

const SimpleCard = ({ image, title, color, price }: SimpleCardProps) => {
    return (
        <div className="cursor-pointer relative border-2 border-[#272727] p-4 rounded-2xl rounded-tl-none w-52 m-6 group">
            <h2 className="absolute -left-6 bg-[#272727] rounded-lg rounded-tr-none py-2 px-4 text-white">{title.split(' ')[0] + ' ' + title.split(' ')[1]}</h2>
            <Image
                src={image}
                alt={title}
                width={200}
                height={200}
                className="my-10 rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-110"
            />
            <div className="relative px-5 ">
                <p className="relative bg-white px-4 w-fit z-10 text-sm">{color}</p>
                <div className="absolute left-0 top-1/2 w-full border border-[#272727] z-0" />
            </div>
            <p className="text-2xl text-[#272727] my-2">{money(price)}</p>
        </div>
    );
}

export default SimpleCard;