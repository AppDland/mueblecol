import Link from "next/link";
import { FaTruck } from "react-icons/fa";

const Envios = () => {

    return (
        <section className="section grid px-6">
            <div className="grid grid-cols-[1fr_auto] gap-4 items-center text-primary max-w-xl w-[80%] place-self-center my-10">
                <p className="font-bold border-r col-span-1 text-sm sm:text-base pr-6">
                    Ofrecemos envíos gratis en toda la provincia de Corrientes
                </p>
                <div className="col-span-1">
                    <FaTruck size={30} />
                </div>
            </div>
            <div className="text-center py-10 text-sm">
                <p>Enviamos a todo el país coordinando la entrega</p>
                <Link target="_blank" href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}?text=Hola!%20Quiero%20preguntar%20por%20la%20forma%20de%20envio`}>contáctanos para más información</Link>
            </div>
        </section>
    )
}

export { Envios };