import { Categories } from "@/modules";

interface ZoneLayoutProps {
    children: React.ReactNode;
}

export default function ZoneLayout({ children }: ZoneLayoutProps) {
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