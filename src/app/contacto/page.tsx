const Contacto = () => {

    //Poner Mas Informacion De Contacto O De La Empresa
    return (
        <div className="flex flex-col items-center sm:flex-row sm: sm:w-11/12 mx-auto">
            <div className="flex flex-col text-center w-full items-center justify-center my-4">
                <h1 className="font-bold text-primary text-2xl my-5">Hola, somos Mueblecol</h1>
                <p className="font-semibold m-5">Estamos para ayudarte en lo que necesites,
                    <br /> ya sea una cotización, una duda o una sugerencia.</p>
            </div>
            <div className="flex flex-col items-center select-none w-full  border bg-neutral-50 rounded-lg">
                <p className="font-semibold my-4 sm:mt-10 text-center">Si deseas contactarnos, por favor llena el siguiente formulario:</p>
                <form className="flex flex-col w-80 sm:w-2/3 sm:mt-4">
                    <input className="py-2 px-4 my-4 border border-gray-400 rounded-box text-center"
                        type="text" placeholder="Nombre Completo" />
                    <input className="py-2 px-4 my-4 border border-gray-400 rounded-box text-center"
                        type="text" placeholder="Número Celular" />
                    <input className="py-2 px-4 my-4 border border-gray-400 rounded-box text-center"
                        type="text" placeholder="Correo Electrónico" />
                    <textarea className="py-2 px-4 my-4 border border-gray-400 rounded-box resize-none text-center"
                        placeholder="Mensaje O Consulta" maxLength={200}
                    ></textarea>
                    <button className="bg-primary-light rounded-lg my-6 mx-auto w-40">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Contacto