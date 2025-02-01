import { Best, Envios } from "@/modules";

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <div className="px-4">
            {children}
            <Envios />
            <Best />
        </div>
    )
}