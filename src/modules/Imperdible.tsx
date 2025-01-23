import ModernCard from "@/components/ModernCard";

const Imperdible = () => {

    return (
        <section className="place-self-center flex flex-col md:flex-row justify-evenly items-center py-14 w-full max-w-6xl">
            <ModernCard title="Facilidad de pago" description="Ofrecemos la oportunidad de que puedas comprar en cuotas" />
            <ModernCard title="Buenos precios" description="Los mejores precios que podrás encontrar" />
            <ModernCard title="Envío gratis" description="Llevamos tu compra hasta la puerta de tu casa sin cargos extra" />
        </section>
    )
}

export default Imperdible;