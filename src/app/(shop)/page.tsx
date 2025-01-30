import { Finder } from "@/components/finder/Finder";
import { Best, Categories, Destacados, Imperdible, Intro, Zones } from "@/modules";

export default function Home() {

    return (
        <div className="bg-gray-100">
            <div className="hidden sm:block">
                <Intro />
            </div>
            <div className="mt-20 sm:hidden flex justify-center bg-white w-full">
                <Finder />
            </div>
            <Categories showTitle={false} />
            <Destacados />
            <Best />
            <Zones />
            <Imperdible />
        </div>
    )
}