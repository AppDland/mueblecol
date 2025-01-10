import Categories from "@/modules/Categories";

export default function ZoneLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
            <Categories />
        </div>
    );
} 