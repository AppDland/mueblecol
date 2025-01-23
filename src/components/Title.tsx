interface TitleInt {
    children?: React.ReactNode;
}

const Title = ({ children }: TitleInt) => {
    return (
        <h2 className="text-xl font-bold mb-4 text-accent mx-6">
            {children}
        </h2>

    )
}

export default Title;