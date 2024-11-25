interface TitleInt{
    title: string;
}

const Title = ({title}:TitleInt) => {
    return(
        <div className="flex justify-center items-center my-6 select-none">
            <h2 className="text-[#005353] pl-10 pr-16 font-bold">{title}</h2>
            <div className="w-full border-b border-[#177675]" />
        </div>
    )
}

export default Title;