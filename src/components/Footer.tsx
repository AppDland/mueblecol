import Image from "next/image";

const Footer = () => {

    const social = [
        { icon: "/images/facebook.svg", url: "https://www.facebook.com", alt: "facebook" },
        { icon: "/images/instagram.svg", url: "https://www.instagram.com", alt: "instagram" },
        { icon: "/images/whatsapp.svg", url: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}?text=Hola!%20Quiero%20realizar%20una%20compra`, alt: "whatsapp" }
    ]

    return (
        <footer
            className="flex flex-col py-14 items-center"
            style={{
                background: 'linear-gradient(to bottom, #f3f4f6, white)',
            }}
        >
            <div className="flex justify-evenly w-full max-w-96 mb-6">
                {
                    social.map((item, index) => (
                        <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                            <Image
                                alt={item.alt}
                                src={item.icon}
                                width={30}
                                height={30}
                            />
                        </a>
                    ))
                }
            </div>
            <p className="text-secondary">mueblecol.com</p>
        </footer>
    )
}

export default Footer;