import { Carrousel, SimpleCard } from "@/components";
import Items from "@/data/items.json";
import Link from "next/link";

interface ZonesProps {
    defaultZone?: string;
}

const Zones = ({ defaultZone = 'negocio' }: ZonesProps) => (
    <section className="section bg-gray-200 px-1 sm:px-2">
        <h2 className="h2">Todo para tu {defaultZone}</h2>
        <div className="px-1 sm:px-2">
            <Carrousel>
                {
                    Items.items.filter(({ zones }) => zones.find(zone => zone === defaultZone)).slice(0, 5).map((item, index) => (
                        <SimpleCard
                            title={item.publicName}
                            url={item.name}
                            color={item.media[0].colorName}
                            image={item.media[0].photos[0]}
                            price={item.price}
                            offer={item.offer}
                            finan={item.finan}
                            key={index}
                        />
                    ))
                }
            </Carrousel>
        </div>
        <LinkButton href={`/zonas/${defaultZone}`} />
    </section>
)

const LinkButton = ({ href }: { href: string }) => (
    <Link href={href}>
        <p className="text-center sm:hover:opacity-50 mt-3">Ver todo</p>
    </Link>
)

export { Zones };