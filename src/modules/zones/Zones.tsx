import BoxContent from "@/components/BoxContent";
import Section from "@/components/Section";
import SimpleCard from "@/components/SimpleCard";
import Items from "@/data/items.json";
import Link from "next/link";

const Zones = () => (
    <>
        <Section className="bg-gray-200">
            <h2 className="h2">Todo para tu negocio</h2>
            <BoxContent autoslide={false}>
                {
                    Items.items.filter(({ zones }) => zones.find(zone => zone === 'negocio')).slice(0, 5).map((item, index) => (
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
            </BoxContent>
            <LinkButton href="/zonas/negocio" />
        </Section>
        <br />
        <Section className="bg-gray-200">
            <h2 className="h2">Muebles ideales para tu dormitorio</h2>
            <BoxContent autoslide={false}>
                {
                    Items.items.filter(({ zones }) => zones.find(zone => zone === 'dormitorio')).slice(0, 5).map((item, index) => (
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
            </BoxContent>
            <LinkButton href="/zonas/dormitorio" />
        </Section>
    </>
)

const LinkButton = ({ href }: { href: string }) => (
    <Link href={href}>
        <p className="text-center hover:opacity-50">Ver todo</p>
    </Link>
)

export { Zones };