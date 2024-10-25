import { redirect } from "next/navigation";

// Редирект на каталок со страницы /
export default function Home() {
    redirect("/en/catalog");
}
