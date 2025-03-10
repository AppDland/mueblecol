import Link from "next/link";
import classNames from "classnames";
import "./title.css";
import Image from "next/image";

const Title = () => {

    return (
        <Link href="/">
            <TitleAnimated />
        </Link>
    )
}

export const TitleAnimated = ({ dark }: { dark?: boolean }) => (
    <div className="text-2xl font-bold flex w-40">
        <div className="relative w-full max-w-6 icon-header-title mr-1">
            <Image
                src="/images/logo.svg"
                alt="Mueblecol"
                fill
            />
        </div>
        {
            [{ title: "Mueble", color: dark ? "text-third" : "text-secondary" }, { title: "col", color: "text-primary" }].map(({ title, color }, index) => (
                <span key={index} className={classNames(color, `mueblecol-header-title-${index}`)}>
                    {title}
                </span>
            ))
        }
    </div>
)

export { Title };