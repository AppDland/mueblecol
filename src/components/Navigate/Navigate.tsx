'use client';
import { useNProgress } from "@/custom/useNProgress";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface NavigateProps extends LinkProps, React.HTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
}

const Navigate = ({ children, ...props }: NavigateProps) => {
    const { start, done } = useNProgress();
    const pathname = usePathname();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // quito los parametros de la url
        const href = props.href?.toString().split('?')[0];

        // Si la ruta destino es la misma que la actual
        if (href === pathname) {
            // Simulamos una pequeña carga
            start();
            setTimeout(() => {
                done();
            }, 200);
        } else {
            start();
        }

        props.onClick?.(e);
    }

    return (
        <Link
            {...props}
            onClick={handleClick}
        >
            {children}
        </Link >
    )
}

export { Navigate };