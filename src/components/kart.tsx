import Image from "next/image";
import { Navigate } from "./Navigate/Navigate";


const Kart = () => {

    return (
        <Navigate href={'/carrito'}>
            <Image
                src={'/images/kart.svg'}
                alt="cart"
                width={25}
                height={25}
            />
        </Navigate>
    );
};

export default Kart;