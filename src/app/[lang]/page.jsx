import { redirect } from "next/navigation";

// Редирект на каталок со страницы /[lang]/
export default function Home() {
    redirect("./catalog");
}