import Categories from "@/modules/Categories";

export default function ZoneLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
            <h3 className="text-center mt-16 text-lg font-bold">Encuentra más zonas</h3>
            <Categories />
        </div>
    );
} 