import Image from "next/image";
import Link from "next/link"

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
    return (
        <>
            <div className="header-info">
                <div className="header-content">
                    <p>Добро пожаловать в интернет-магазин M-Market.</p>
                    <div className="header-info__left">
                        <p>Наши соц-сети:</p>
                        {renderSocialMedia()}
                        <div className="hr"></div>
                        <div className="header-info__left-text">
                            <p>RU</p>
                            <p>USD</p>
                        </div>
                    </div>
                </div>
            </div>
            <header>
                <div className="header-content">
                    <Link className="header__title" href="/">
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
                            placeholder="Ищите что-нибудь..."
                            id="header-search"
                            name="header-search"
                            minlength="1"
                            maxlength="200"
                            required
                        />
                        <Image
                            src={svgSearch}
                            alt="search"
                            priority={true}
                        />
                    </div>

                    {renderButtonsHeaderFuncs()}
                </div>
            </header>
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
function renderButtonsHeaderFuncs() {
    const headerFuncs = [
        {src: svgShoppingCart, alt: "Корзина", link: ""},
        {src: svgHeart, alt: "Избранное", link: "#"},
        {src: svgUser, alt: "Личный кабинет", link: "/cabinet"},
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