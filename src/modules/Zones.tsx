import BoxContent from "@/components/BoxContent";
import SimpleCard from "@/components/SimpleCard";
import Title from "@/components/Title";
import Items from "@/data/items.json";
import Link from "next/link";

const Zones = () => (
    <>
        <div className="py-5 my-8 bg-gray-200">
            <Title>Todo para tu negocio</Title>
            <BoxContent autoslide={false}>
                {
                    Items.items.filter(({ zones }) => zones.find(zone => zone === 'negocio')).slice(0, 10).map((item, index) => (
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
        </div>
        <br />
        <div className="py-5 my-8 bg-gray-200">
            <Title>Muebles ideales para tu dormitorio</Title>
            <BoxContent autoslide={false}>
                {
                    Items.items.filter(({ zones }) => zones.find(zone => zone === 'dormitorio')).slice(0, 10).map((item, index) => (
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
        </div>
    </>
)

const LinkButton = ({ href }: { href: string }) => (
    <Link href={href}>
        <p className="text-center hover:opacity-50">Ver todo</p>
    </Link>
)

export default Zones;