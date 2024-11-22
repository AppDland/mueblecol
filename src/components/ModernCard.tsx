interface ModernCardInt {
    title: string;
    description: string;
}
const ModernCard = ({ title, description }: ModernCardInt) => {

    return (
        <div className="
            relative
            flex
            flex-col
            justify-center
            items-center
            w-80
            h-96
            rounded-xl
            shadow-2xl
            text-white
            text-center
            bg-gradient-to-b 
            from-[#272727] 
            via-[#272727] 
            to-[#173636]
            p-5
            select-none
            border"
        >
            <div className="
                w-72
                h-72
                rotate-45
                -right-40
                top-24
                bg-white/10
                absolute"
            />
            <div className="
                w-64
                h-64
                rotate-45
                -left-36
                top-52
                bg-white/5
                absolute"
            />
            <div>
                <p className="text-3xl font-bold mb-10">{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ModernCard;