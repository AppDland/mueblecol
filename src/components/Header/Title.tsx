import useLargeScreen from "@/custom/useLargeScreen";
import Link from "next/link";
import classNames from "classnames";
import "./title.css";

const Title = () => {
    const isLargeScreen = useLargeScreen(768);

    return (
        <Link href="/" >
            <div className="text-2xl font-bold flex w-32">
                {
                    isLargeScreen &&
                    [{ title: "Mueble", color: "text-secondary" }, { title: "col", color: "text-primary" }].map(({ title, color }, index) => (
                        <span key={index} className={classNames(color, `mueblecol-header-title-${index}`)}>
                            {title}
                        </span>
                    ))
                }
            </div>
        </Link>
    )
}

export default Title;