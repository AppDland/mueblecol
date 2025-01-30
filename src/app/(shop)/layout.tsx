import { Header } from "@/components";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {


    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    )
}