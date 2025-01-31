import { ModernCard } from "@/components";

const Imperdible = () => {

    return (
        <section className="section flex flex-col sm:flex-row justify-evenly p-0 sm:p-6">
            <ModernCard title="Facilidad de pago" description="Ofrecemos la oportunidad de que puedas comprar en cuotas" />
            <ModernCard title="Buenos precios" description="Los mejores precios que podrás encontrar" />
            <ModernCard title="Envío gratis" description="Llevamos tu compra hasta la puerta de tu casa" />
        </section>
    )
}

export { Imperdible };