import classNames from "classnames";

interface ModernCardInt {
    title: string;
    description: string;
}
const ModernCard = ({ title, description }: ModernCardInt) => {

    return (
        <div className={classNames(
            "relative flex flex-col justify-center items-center",
            "w-full sm:w-52",
            "h-32 sm:h-60",
            "sm:rounded-xl sm:shadow-2xl select-none overflow-hidden box-border",
            "text-white text-center bg-accent",
            "p-5",
            "md:m-5",
        )}>
            <div className="hidden sm:block w-40 h-72 rotate-45 -right-20 top-3 bg-white/10 absolute"
            />
            <div className="hidden sm:block w-64 h-64 rotate-45 -left-36 top-52 bg-white/5 absolute"
            />
            <div>
                <p className="text-base md:text-lg font-bold mb-2 sm:mb-10">{title}</p>
                <p className="text-xs md:text-sm">{description}</p>
            </div>
        </div>
    )
}

export { ModernCard };