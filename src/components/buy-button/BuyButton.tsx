'use client';

interface BuyButtonProps {
    productPath: string;
}

const BuyButton = ({ productPath }: BuyButtonProps) => {



    const handlePurchase = () => {
        setTimeout(() => {
            window.location.replace(`/gracias`);
        }, 500)
        //abrir una nueva ventana que dirige a una ruta de whatsapp
        const Message = `Hola! vengo de mueblecol.com y quisiera comprar el siguiente artículo \n\nhttps://mueblecol.com/${productPath}`;
        window.open(`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}?text=${Message}`, '_blank');
    };

    return (
        <button
            onClick={handlePurchase}
            className="btn-primary w-full"
        >
            Comprar
        </button>
    )
}

export { BuyButton };