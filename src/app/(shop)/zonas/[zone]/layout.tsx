import { Categories } from "@/modules";
import { notFound } from "next/navigation";

interface ZoneLayoutProps {
    children: React.ReactNode;
    params: Promise<{ zone: string }>;
}

export default async function ZoneLayout({ children, params }: ZoneLayoutProps) {
    const zoneSlug = (await params).zone;
    if (!zoneSlug) {
        notFound();
    }

    return (
        <>
            <div className="min-h-screen bg-gray-100 p-4 pt-28">
                {children}
            </div>
            <h3 className="text-center mt-16 text-lg font-bold">Encuentra más zonas</h3>
            <Categories showTitle={false} />
        </>
    );
} 