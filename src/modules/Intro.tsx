const Intro = () => {
    return (
        <Background>
            <div className='flex flex-col items-center justify-center w-full opacity-60'>
                <h1 className={'text-2xl sm:text-4xl text-white'}>Muebles Para El Hogar</h1>
                <p className={'text-base sm:text-lg text-white'}>¡Gran Variedad!</p>
            </div>
        </Background>
    );
};

const Background = ({ children }: { children: React.ReactNode }) => (
    <div
        className="relative w-full flex items-center justify-center select-none justify-self-center"
        style={{
            background: 'linear-gradient(to bottom, #005353, #2E9896)',
            height: '20vh'
        }}
    >
        {children}
    </div>
)

export default Intro;