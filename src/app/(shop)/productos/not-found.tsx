import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className={classNames(
            'w-screen h-screen items-center justify-center',
            'flex flex-col sm:flex-row'
        )}>
            <div className={classNames(
                'px-5 py-2',
                'sm:border-r sm:border-secondary',
                'text-center sm:text-left'
            )}>
                <h2 className='h2 mb-5 sm:mb-2'>Oops</h2>
                <p>No se ha encontrado el artículo que buscas</p>
                <p>Pero puedes <Link href="/" className='underline text-blue-500'>volver al inicio</Link></p>
            </div>

            <Image
                src={'/images/logo_black.png'}
                alt='Logo mueblecol.com'
                width={200}
                height={40}
                className='mx-5 my-3 sm:my-0'
            />
        </div>
    )
}