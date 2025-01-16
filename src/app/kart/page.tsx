import { BiSolidTrashAlt } from "react-icons/bi";



const kart = () => {




    return (

        <div className="container mx-auto text-center border bg-neutral-100 rounded-lg">
            <h1 className="my-10 font-extrabold text-3xl">Tus Articulos</h1>
            <div>
                <KartInventary publicName="Producto 1" price={100} mount={1} photos="https://via.placeholder.com/150" />
                <div className="flex justify-between border-b pb-8 mx-10 ">
                    <h2 className="text-2xl font-extrabold">Total</h2>
                    <h2 className="text-2xl font-extrabold">€ 100</h2>
                </div>
                <div className="flex justify-between my-10 mx-10 ">
                    <button className="bg-primary-dark hover:bg-primary text-white font-bold py-2 px-4 rounded">Pagar</button>
                    <button className="bg-primary-dark hover:bg-primary text-white font-bold py-2 px-4 rounded">Vaciar</button>
                </div>
            </div>
        </div>
    );
}

interface KartInventary {
    publicName: string;
    price: number;
    mount: number;
    photos: string;
}

const KartInventary = ({ publicName, price, mount, photos }: KartInventary) => {

    //Hacer un map de los productos
    return (
        <div className="flex justify-between border-b py-8 my-8 mx-10 border border-black">
            <div className="flex ml-5 border border-black rounded-lg">
                <img src={photos} alt="Visualizacion previa" />
            </div>
            <div className="border border-black w-full mx-5">
                <h2 className="text-2xl font-extrabold">{publicName}</h2>
                <h2 className="text-2xl font-extrabold">{mount}</h2>
                <h2 className="text-2xl font-extrabold">{price}</h2>
            </div>
            <button className="bg-primary-dark hover:bg-primary text-white p-2 my-auto mr-5 h-2/4 text-3xl rounded"><BiSolidTrashAlt /></button>
        </div>
    )
}


export default kart;