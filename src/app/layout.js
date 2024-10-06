import { Open_Sans } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./styles/style.scss"

const open_Sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
    title: "M-Market",
    description: "M-Market",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body className={open_Sans.className}>
                <Header />
                <main>
                    <article>
                        {children}
                    </article>
                </main>
                <Footer />
            </body>
        </html>
    );
}
