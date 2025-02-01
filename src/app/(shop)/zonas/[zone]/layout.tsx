import { Categories } from "@/modules";
import { notFound } from "next/navigation";
import Items from "@/data/items.json";

interface ZoneLayoutProps {
    children: React.ReactNode;
    params: Promise<{ zone: string }>;
}

export default async function ZoneLayout({ children, params }: ZoneLayoutProps) {
    const zoneSlug = (await params).zone;

    const zoneItems = Items.items.filter((item) => item.zones.includes(zoneSlug));

    if (zoneItems.length < 1) {
        notFound();
    }

    return (
        <>
            <div className="min-h-screen bg-gray-100 p-4">
                {children}
            </div>
            <h3 className="text-center mt-16 text-lg font-bold">Encuentra más zonas</h3>
            <Categories showTitle={false} />
        </>
    );
} 