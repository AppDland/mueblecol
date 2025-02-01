import { Best, Categories } from "@/modules";

export default function Page() {

    return (
        <section className="section">
            <h1 className="h1 text-center">Encuentra muebles por categorías/zonas</h1>
            <div className="my-10">
                <Categories showTitle={false} />
            </div>
            <Best />
        </section>
    )
}