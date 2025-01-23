import Best from "@/modules/Best";
import Categories from "@/modules/Categories";
import Destacados from "@/modules/Destacados";
import Imperdible from "@/modules/Imperdible";
import Intro from "@/modules/Intro";
import Zones from "@/modules/Zones";

const Home = () => {

    return (
        <div className="bg-gray-100">
            <Intro />
            <Categories />
            <Destacados />
            <Best />
            <Zones />
            <Imperdible />
        </div>
    )
}

export default Home;