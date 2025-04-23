import { Destacados } from "@/modules";
import { Suspense } from "react";

export default function CarritoLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>

            <Suspense fallback={<div>Cargando carrito...</div>}>
                {children}
            </Suspense>
            <Destacados />
        </div>
    )
}
