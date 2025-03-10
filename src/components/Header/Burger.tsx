'use client';
import vibrate from "@/functions/vibrate";
import { sideBarState } from "@/store";
import classNames from "classnames";


const Burger = () => {

    const { animated, toggle } = sideBarState();


    const handleClick = () => {
        toggle();
        vibrate();
    }

    return (
        <div className="w-full h-full flex justify-center items-center cursor-pointer p-5 overflow-hidden relative z-40" onClick={handleClick}>
            <div className="w-8 h-5 flex flex-col justify-between relative">
                <div className={classNames(
                    "border-b-2 duration-150 absolute w-full",
                    animated ? "-rotate-45 translate-y-2.5" : "",
                    animated ? "border-white" : "border-primary"
                )} />
                <div className={classNames(
                    "border-b-2 border-primary duration-150 absolute top-1/2 -translate-y-1/2 w-full",
                    animated ? "-right-40" : "left-0"

                )} />
                <div className={classNames(
                    "border-b-2 duration-150 absolute w-full bottom-0",
                    animated ? "rotate-45 -translate-y-2" : "",
                    animated ? "border-white" : "border-primary"
                )} />
            </div>
        </div>
    )
}

export default Burger;