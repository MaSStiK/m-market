"use client"
import Image from "next/image";
import Link from "next/link"
import { usePathname, redirect } from "next/navigation";
import { useLocalization, useLang, Languages } from "@/components/Localization/Localization";

import imgLogo from "@/assets/logo.png"
import svgSearch from "@/assets/svg/Search.svg"

import svgTwitter from "@/assets/header-info/Twitter.svg"
import svgFacebook from "@/assets/header-info/Facebook.svg"
import svgPinterest from "@/assets/header-info/Pinterest.svg"
import svgReddit from "@/assets/header-info/Reddit.svg"
import svgYoutube from "@/assets/header-info/Youtube.svg"
import svgInstagram from "@/assets/header-info/Instagram.svg"

import svgHeart from "@/assets/header/Heart.svg"
import svgShoppingCart from "@/assets/header/ShoppingCart.svg"
import svgUser from "@/assets/header/User.svg"

import "./Header.scss"
import "./Header-info.scss"

export default function Header() {
    const Pathname = usePathname()
    // Локализация
    const Loc = useLocalization("Header")
    const Lang = useLang()

    // Смена языка
    function changeLang(value) {
        // Если язык не тот же - переносим на другой язык сохраняя путь
        if (!Pathname.startsWith(`/${value}/`)) {
            let newPathname = Pathname.replace(`/${Lang}/`, `/${value}/`)
            redirect(newPathname)
        }
    }

    return (
        <>
            <div className="header-info">
                <div className="header-content">
                    <p className="text-white">{Loc.welcome}</p>
                    <div className="header-info__left">
                        <p className="text-white">{Loc.socialMedia}</p>
                        {renderSocialMedia()}
                        <div className="hr"></div>
                        <div className="header-info__left-text">
                            <div className="select">
                                <select name="lang" defaultValue={Lang} onChange={(event) => changeLang(event.target.value)}>
                                    {Object.keys(Languages).map((language, i) => (
                                        <option value={language} key={i}>{Languages[language].title}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="select">
                                <select name="currency">
                                    <option value="usd">USD</option>
                                    <option value="rub">RUB</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <header>
                <div className="header-content">
                    <Link className="header__title" href={`/${Lang}/catalog`}>
                        <div className="header__title-logo">
                            <Image
                                src={imgLogo}
                                alt="logo"
                                priority={true}
                            />
                        </div>
                        <h3 className="text-white">Market</h3>
                    </Link>

                    <div className="input-wrapper">
                        <input
                            type="text"
                            placeholder={Loc.searchPlaceholder}
                            id="header-search"
                            name="header-search"
                            minLength="1"
                            maxLength="200"
                            required
                        />
                        <Image
                            src={svgSearch}
                            alt="search"
                            priority={true}
                        />
                    </div>

                    {renderButtonsHeaderFuncs(Loc, Lang)}
                </div>
            </header>

            {/* Блок с категориями товаров */}
        </>
    )
}

// Рендер социальных сетей
function renderSocialMedia() {
    const medias = [
        {src: svgTwitter, alt: "Twitter", link: "https://github.com/MaSStiK"},
        {src: svgFacebook, alt: "Facebook", link: "https://github.com/MaSStiK"},
        {src: svgPinterest, alt: "Pinterest", link: "https://github.com/MaSStiK"},
        {src: svgReddit, alt: "Reddit", link: "https://github.com/MaSStiK"},
        {src: svgYoutube, alt: "Youtube", link: "https://github.com/MaSStiK"},
        {src: svgInstagram, alt: "Instagram", link: "https://github.com/MaSStiK"},
    ]

    return (
        <div className="header__social-media">
            {medias.map((media, i) => (
                <Link href={media.link} target="_blank" key={i}>
                    <Image
                        src={media.src}
                        alt={media.alt}
                        title={media.alt}
                        priority={true}
                    />
                </Link>
            ))}
        </div>
    )
}

// Рендер кнопочек после поиска
function renderButtonsHeaderFuncs(Loc, Lang) {
    const headerFuncs = [
        {src: svgShoppingCart, alt: Loc.funcCart, link: `/${Lang}/dashboard`},
        {src: svgHeart, alt: Loc.funcWishlist, link: `/${Lang}/dashboard`},
        {src: svgUser, alt: Loc.funcDashboard, link: `/${Lang}/dashboard`},
    ]

    return (
        <div className="header__funcs">
            {headerFuncs.map((func, i) => (
                <Link href={func.link} key={i}>
                    <Image
                        src={func.src}
                        alt={func.alt}
                        title={func.alt}
                        priority={true}
                    />
                </Link>
            ))}
        </div>
    )
}