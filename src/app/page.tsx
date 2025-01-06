import Finder from "@/components/Finder";
import Categories from "@/modules/Categories";
import Destacados from "@/modules/Destacados";
import Imperdible from "@/modules/Imperdible";
import Intro from "@/modules/Intro";

const Home = () => {

    return (
        <>
            <Intro />
            {/* <div className='-mt-6'>
                <Finder isDark={true} />
            </div> */}
            <Categories />
            <Destacados />
            <Imperdible />
        </>
    )
}

export default Home;