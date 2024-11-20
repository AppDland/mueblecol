import Image from "next/image";

const Intro = () => {

    return (
        <div className="w-full bg-[#A30000] text-white flex justify-evenly items-center" style={{ height: '35vh' }}>
            <div className="bg-white/20 relative" style={{width: '40%', height: '50%'}}>
                <Image
                    src="/truck.webp"
                    alt="Envío Gratis"
                    width={250}
                    height={250}
                    className="absolute right-[-15%] top-1/2 transform -translate-y-1/2 filter brightness-0 invert"
                />
            </div>
            <div className="text-center" style={{width: '40%'}}>
                <h1 className="text-4xl font-bold">Envío Gratis</h1>
                <p>En la puerta de tu casa</p>
            </div>
        </div>
    )
}

export default Intro;