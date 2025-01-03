import classNames from "classnames";

interface BurgerProps {
    isOpen: boolean;
    setIsopen: (isOpen: boolean) => void;
}

const Burger = ({ isOpen, setIsopen }: BurgerProps) => {

    const handleClick = () => {
        setIsopen(!isOpen);
        navigator.vibrate(10);
    }

    return (
        <div className="w-full h-full flex justify-center items-center cursor-pointer p-5" onClick={handleClick}>
            <div className="w-8 h-6 flex flex-col justify-between relative">
                <div className={classNames("border-b-2 duration-150 absolute w-full", isOpen ? "-rotate-45 translate-y-3" : "")} />
                <div className={classNames("border-b-2 duration-150 absolute top-1/2 -translate-y-1/2 w-full", isOpen ? "-left-40" : "left-0")} />
                <div className={classNames("border-b-2 duration-150 absolute w-full bottom-0", isOpen ? "rotate-45 -translate-y-2.5" : "")} />
            </div>
        </div>
    )
}

export default Burger;