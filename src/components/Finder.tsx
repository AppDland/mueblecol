'use client';
import { useState } from "react";

interface FinderInt {
    value: string;
    setValue: (param: string) => void;
    onFind: () => void;
}

const Finder = ({ value, setValue, onFind }: FinderInt) => {

    const [isFocused, setIsfocused] = useState(false);

    const handleBlur = () => {
        if (value.length === 0) {
            setIsfocused(false)
        }
    }

    const handleKeyUp = (event: any) => {
        if (event.code === "Enter" || event.key === "Enter" || event.keyCode === 13) {
            onFind();
        }
    }

    return (
        <div className="relative w-80 h-12 m-5 overflow-hidden rounded-lg flex items-center justify-center border border-[#A30000]">
            <input
                className={`
                relative 
                bg-transparent 
                z-10 
                w-full 
                h-full 
                px-4 
                placeholder:text-center 
                text-xl
                placeholder:text-[#E8E8E8] 
                box-content
                outline-none
                ${isFocused ? 'cursor-auto' : 'cursor-pointer'}
                `}
                type="text"
                placeholder="¿Qué deseas buscar?"
                onChange={({ target }) => setValue(target.value)}
                onFocus={() => setIsfocused(true)}
                onBlur={handleBlur}
                onKeyUp={handleKeyUp}
            />
            {/* <img
                src="/Lupa.svg"
                className="relative z-10 w-7 mx-2 cursor-pointer"
                onClick={onFind}
            /> */}
            <div className={`
                bg-[#A30000]
                ${isFocused ? "w-11" : "w-full"}
                h-full
                absolute
                right-0
                top-0
                z-0
                duration-100
            `}
            />
        </div>
    )
}

export default Finder;