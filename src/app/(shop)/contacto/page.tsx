
const Contacto = () => {

    return (
        <div className="flex flex-col text-center w-full sm:w-3/4 justify-center items-center mx-auto border bg-neutral-100 rounded-lg">
            <h1 className="font-bold text-primary text-2xl my-4 ">Hola, somos Mueblecol</h1>
            <p className="font-semibold ">Estamos para ayudarte en lo que necesites ,
                <br /> ya sea una cotización, una duda o una sugerencia.
                <br /> Si deseas contactarnos, por favor llena el siguiente formulario:</p>
            <div className="flex flex-col items-center my-8 select-none w-11/12 sm:w-3/6 border bg-white rounded-lg py-4">
                <form className="flex flex-col w-80 sm:w-2/3">
                    <input className="py-2 px-4 my-4 border border-gray-400 rounded-box text-center"
                        type="text" placeholder="Nombre Completo" />
                    <input className="py-2 px-4 my-4 border border-gray-400 rounded-box text-center"
                        type="text" placeholder="Número Celular" />
                    <input className="py-2 px-4 my-4 border border-gray-400 rounded-box text-center"
                        type="text" placeholder="Correo Electrónico" />
                    <textarea className="py-2 px-4 my-4 border border-gray-400 rounded-box resize-none text-center"
                        placeholder="Mensaje O Consulta" maxLength={200}
                    ></textarea>
                    <button className="bg-primary-light rounded-lg my-4 mx-auto w-40">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Contacto