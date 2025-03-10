
// const Contactos = () => {

//     return (
//         <div className="flex flex-col text-center w-full sm:w-3/4 justify-center items-center mx-auto border bg-neutral-100 rounded-lg">
//             <h1 className="font-bold text-primary text-2xl my-4 ">Hola, somos Mueblecol</h1>
//             <p className="font-semibold ">Estamos para ayudarte en lo que necesites ,
//                 <br /> ya sea una cotización, una duda o una sugerencia.
//                 <br /> Si deseas contactarnos, por favor llena el siguiente formulario:</p>
//             <div className="flex flex-col items-center my-8 select-none w-11/12 sm:w-3/6 border bg-white rounded-lg py-4">
//                 <form className="flex flex-col w-80 sm:w-2/3">
//                     <input className="py-2 px-4 my-4 border border-gray-400 rounded-box text-center"
//                         type="text" placeholder="Nombre Completo" />
//                     <input className="py-2 px-4 my-4 border border-gray-400 rounded-box text-center"
//                         type="text" placeholder="Número Celular" />
//                     <input className="py-2 px-4 my-4 border border-gray-400 rounded-box text-center"
//                         type="text" placeholder="Correo Electrónico" />
//                     <textarea className="py-2 px-4 my-4 border border-gray-400 rounded-box resize-none text-center"
//                         placeholder="Mensaje O Consulta" maxLength={200}
//                     ></textarea>
//                     <button className="bg-primary-light rounded-lg my-4 mx-auto w-40">Enviar</button>
//                 </form>
//             </div>
//         </div>
//     )
// }
'use client';

import { useState } from "react";

export default function Page() {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        window.open(`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}?text=Hola,%20soy%20${name},%20vengo%20de%20mueblecol.%20${message}`, '_blank');
    }

    return (
        <section className="section w-full max-w-2xl place-self-center">
            <h1 className="h1 text-center text-secondary">Contáctanos</h1>
            <div className="my-6 text-sm md:text-base">
                <p>Estamos para ayudarte en lo que necesites, ya sea una cotización, una duda o una sugerencia.</p>
                <p>Si deseas contactarnos, por favor llena el siguiente formulario:</p>
            </div>

            <form
                className="grid w-[90%] place-self-center max-w-md"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    placeholder="Nombre Completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border my-3 py-2 px-4 rounded-lg focus:outline-none focus:border-black"
                />
                <textarea
                    placeholder="Dejanos tu consulta"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={200}
                    className="border my-3 py-2 px-4 rounded-lg focus:outline-none focus:border-black resize-none min-h-24"
                />
                <button className="btn-primary w-fit px-10 place-self-center mt-3">Enviar Consulta</button>
            </form>
        </section>
    )
}

// export default Contactos;