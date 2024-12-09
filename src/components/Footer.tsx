import Image from "next/image";

const Footer = () => {

    const social = [
        { icon: "./images/Facebook.svg", url: "https://www.facebook.com", alt: "facebook" },
        { icon: "./images/Instagram.svg", url: "https://www.instagram.com", alt: "instagram" },
        { icon: "./images/Whatsapp.svg", url: "https://www.whatsapp.com", alt: "whatsapp" }
    ]

    return (
        <footer className="flex flex-col py-14 items-center">
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