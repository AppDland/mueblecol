import { Categories } from "@/modules";

export default function ZoneLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="min-h-screen bg-gray-100 p-4 pt-8">
                {children}
            </div>
            <h3 className="text-center mt-16 text-lg font-bold">Encuentra más zonas</h3>
            <Categories showTitle={false} />
        </>
    );
} 