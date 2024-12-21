import Link from "next/link";

const ThankYouPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-100">
            <div className="max-w-md p-8 text-center">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-secondary mb-4">
                        ¡Gracias por tu compra!
                    </h1>
                    <p className="text-lg text-base-content">
                        Hemos recibido tu pedido correctamente. Te hemos enviado un correo electrónico con los detalles de tu compra.
                    </p>
                </div>

                <div className="space-y-4">
                    <p className="text-base-content/80">
                        En breve nos pondremos en contacto contigo para coordinar la entrega.
                    </p>
                    <Link
                        href={'/'}
                        className="block w-full bg-secondary hover:bg-secondary-focus text-secondary-content py-3 rounded-lg transition-all duration-200 text-center no-underline"
                    >
                        Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ThankYouPage;