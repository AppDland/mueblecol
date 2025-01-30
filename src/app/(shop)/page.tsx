import { Best, Categories, Destacados, Intro } from "@/modules";
import Imperdible from "@/modules/Imperdible";
// import Zones from "@/modules/Zones";

export default function Home() {

    return (
        <div className="bg-gray-100">
            <Intro />
            <Categories />
            <Destacados />
            <Best />
            {/* <Zones /> */}
            {/* <Imperdible /> */}
        </div>
    )
}