import classNames from "classnames";

interface SwipeProps {
    children: React.ReactNode;
    className?: string;
    ref?: React.RefObject<HTMLDivElement>;
}

const Swipe = ({ children, className, ref }: SwipeProps) => {


    return (
        <div
            className={classNames("overflow-x-auto scrollbar-hide", className)}
            ref={ref}
        >
            {children}
        </div>
    )
}

export default Swipe;