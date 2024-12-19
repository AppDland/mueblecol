
const Intro = () => {
    return (
        <Background>
            <div
                className={'relative flex items-center justify-center w-full select-none bg-primary justify-self-center overflow-hidden'}
                style={{
                    height: '30vh',
                    maxWidth: '1450px'
                }}
            >
                <Decoration />
                <div className="w-full flex justify-between max-w-5xl z-10">
                    <div className='flex flex-col items-center justify-center w-full'>
                        <h1 className={'text-3xl text-white'}>Muebles Para El Hogar</h1>
                        <p className={'text-lg text-white'}>¡Gran Variedad!</p>
                    </div>
                    <div className='flex-col items-center justify-center hidden md:flex w-full'>
                        <h2 className={'text-2xl font-bold mt-4 text-secondary'}>Envío Gratis</h2>
                        <p className={'text-lg text-secondary'}>Llevamos a la puerta de tu casa</p>
                    </div>
                </div>
            </div>
        </Background>
    );
};

const Decoration = () => (
    <>
        <div
            className='absolute rotate-45 aspect-square bg-third hidden md:block'
            style={{ width: '30vh', left: 'calc(50% + 5vh)' }}
        />
        <div
            className={"absolute bg-third w-1/3 -right-4 hidden md:block"}
            style={{ height: '30vh' }}
        />
    </>
)

const Background = ({ children }: { children: React.ReactNode }) => (
    <div className="relative w-full">
        <div className="absolute bg-primary w-1/2 h-full left-0 top-0" />
        <div className="absolute bg-third w-1/2 h-full right-0 top-0" />
        {children}
    </div>
)

export default Intro;