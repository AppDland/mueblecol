import { Best, Categories, Zones } from '@/modules'

export default function NotFound() {
    return (
        <section>
            <h2 className='h2 text-center mb-0'>Oops</h2>
            <p className='text-center'>No encontramos la zona que buscas</p>
            <p className='text-center mt-10 text-sm'>Aquí tienes todas nuestras zonas disponibles</p>
            <div className='mb-10'>
                <Categories showTitle={false} />
            </div>
            <Zones />
            <Zones defaultZone='dormitorio' />
            <Best />
        </section>
    )
}