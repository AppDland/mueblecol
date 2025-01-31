import { Title } from "@/components";
import { Finder } from "@/components/finder/Finder";
import { Best, Categories, Destacados, Envios, Imperdible, Intro, Zones } from "@/modules";

export default function Home() {

    return (
        <div>
            <div className="mt-20">
                <Intro />
            </div>
            <Categories showTitle={false} />
            <Destacados />
            <Best />
            <Zones />
            <Best itemsKey="items2" />
            <Imperdible />
            <Zones defaultZone="dormitorio" />
            <Envios />
        </div>
    )
}