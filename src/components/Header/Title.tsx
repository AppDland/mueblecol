import Link from "next/link";
import classNames from "classnames";
import "./title.css";

const Title = () => {

    return (
        <Link href="/" className="hidden sm:block">
            <TitleAnimated />
        </Link>
    )
}

export const TitleAnimated = ({ dark }: { dark?: boolean }) => (
    <div className="text-2xl font-bold flex w-32">
        {
            [{ title: "Mueble", color: dark ? "text-third" : "text-secondary" }, { title: "col", color: "text-primary" }].map(({ title, color }, index) => (
                <span key={index} className={classNames(color, `mueblecol-header-title-${index}`)}>
                    {title}
                </span>
            ))
        }
    </div>
)

export default Title;