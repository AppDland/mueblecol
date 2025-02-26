import { Destacados } from "@/modules";

export default function NotFound() {
    return (
        <div className="min-h-screen py-5">
            <h1 className="h1 text-center">No se encontraron resultados</h1>
            <p className="text-center">No hemos encontrado ningún resultado para tu búsqueda. Por favor, inténtalo de nuevo con otras palabras.</p>

            <br />
            <Destacados />
        </div>
    );
}
