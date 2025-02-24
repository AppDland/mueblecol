import { Best, Categories, Zones } from '@/modules'

export default function NotFound() {
    return (
        <section>
            <div className='my-10'>
                <h2 className='h2 text-center mb-0 text-2xl font-bold'>Oops!</h2>
                <p className='text-center'>No encontramos muebles para la zona que buscas</p>
                <p className='text-center mt-10 text-sm'>Aquí tienes todas nuestras zonas disponibles</p>
            </div>
            <div className='mb-10'>
                <Categories showTitle={false} />
            </div>
            <Zones />
            <Zones defaultZone='dormitorio' />
            <Best />
        </section>
    )
}