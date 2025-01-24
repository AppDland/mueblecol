import Link from "next/link";
import classNames from "classnames";
import "./title.css";
import Image from "next/image";

const Title = () => {

    return (
        <Link href="/" className="hidden sm:block">
            <TitleAnimated />
        </Link>
    )
}

export const TitleAnimated = ({ dark }: { dark?: boolean }) => (
    <div className="text-2xl font-bold flex w-40">
        <Image
            src="/images/logo.svg"
            alt="Mueblecol"
            width={25}
            height={25}
            className="mr-1 icon-header-title"
        />
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