import classNames from "classnames";

const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => {

    return (
        <section className={
            classNames(
                "w-full my-0 xl:my-8 py-8 max-w-7xl place-self-center rounded-none xl:rounded-lg",
                className
            )}
        >
            {children}
        </section>
    )
}

export default Section;