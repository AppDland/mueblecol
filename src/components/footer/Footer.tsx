import Image from "next/image";
import Link from "next/link";

const Footer = () => {

    const social = [
        // { icon: "/images/facebook.svg", url: "https://www.facebook.com/share/1EZr4phKWL", alt: "facebook" },
        { icon: "/images/instagram.svg", url: "https://www.instagram.com/mueblecolgrupoisabella?igsh=MXJ0YjB1NGI2NTNjeA==", alt: "instagram" },
        { icon: "/images/whatsapp.svg", url: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}?text=Hola!%20Quiero%20realizar%20una%20compra`, alt: "whatsapp" }
    ]

    return (
        <footer
            className="flex flex-col py-10 items-center bg-primary text-white relative"
            style={{
                // background: 'linear-gradient(to bottom, #f3f4f6, white)',
            }}
        >
            <div className="flex justify-center w-full max-w-96 mb-6">
                {
                    social.map((item, index) => (
                        <Link key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="mx-4">
                            <Image
                                alt={item.alt}
                                src={item.icon}
                                width={30}
                                height={30}
                            />
                        </Link>
                    ))
                }
            </div>
            <div className="flex items-center">
                {/* <Image
                    src={'/images/black_logo.svg'}
                    alt="logo mueblecol.com"
                    width={20}
                    height={20}
                    className="mr-1"
                /> */}
            </div>
            <p>mueblecol.com</p>
            <p className="text-center text-xs opacity-70 mb-6">todos los derechos reservados ©</p>
            <p className="text-xs text-secondary mt-1 opacity-50 absolute bottom-2">By AppDland</p>
        </footer>
    )
}

export { Footer };