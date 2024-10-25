"use client"
import { useParams, usePathname, redirect } from "next/navigation"
import En from "./En"
import Ru from "./Ru"

export const Languages = {
    // title - Название языка при смене языка
    // data - Объект со всем текстом
    en: {title: "English", data: En},
    ru: {title: "Russian", data: Ru},
    fr: {title: "French", data: En},
    de: {title: "German", data: En},
}

export function useLocalization(category) {
    const Params = useParams()
    const Pathname = usePathname()

    if (!Params.lang) { // Если страница не найдена (not-found) - берем язык из Pathname, а не из slug
        Params.lang = Pathname.split("/")[1]
    }

    // console.log("Params.lang", Params.lang);
    // console.log("Languages[Params.lang]", Languages[Params.lang]);

    if (Languages[Params.lang]) {
        return Languages[Params.lang].data[category]
    } else { // Если не найден язык, то меняем на язык по умолчанию (Английский)
        let newPathname = Pathname.replace(`/${Params.lang}/`, `/en/`)
        redirect(newPathname)
    }
}

export function useLang() {
    const Params = useParams()
    return Params.lang
}