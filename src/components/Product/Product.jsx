"use client"
import { useLocalization, useLang } from "@/components/Localization/Localization";

import Image from "next/image";
import svgStar from "@/assets/svg/Star-yellow.svg"
import svgHeart from "@/assets/svg/Heart.svg"
import svgCart from "@/assets/svg/ShoppingCart.svg"
import svgEye from "@/assets/svg/Eye-open.svg"

import "./Product.scss"
import "./Badge.scss"

function setBadge(Loc, badges) {
    // Если badge один, а не массив - приводим к массиву
    if (!Array.isArray(badges)) {
        badges = [badges]
    }

    return (
        <div className="product__badge">
            {badges.map((badge, i) => {
                badge = badge.toLowerCase()

                if (badge === "hot") return <p className={`badge ${badge}`} key={i}>{Loc.badge.hot}</p>
                if (badge === "out") return <p className={`badge ${badge}`} key={i}>{Loc.badge.out}</p>
                if (badge === "sale") return <p className={`badge ${badge}`} key={i}>{Loc.badge.sale}</p>
                if (badge === "best") return <p className={`badge ${badge}`} key={i}>{Loc.badge.best}</p>

                if (badge.startsWith("discount")) {
                    let badgeSplit = badge.split(":")
                    return <p className={`badge ${badgeSplit[0]}`} key={i}>{badgeSplit[1]} {Loc.badge.discount}</p>
                }
            })}
        </div>
    )
}

export default function Product({
    product,
    badge, // Бейдж: hot (red), out (gray), sale (green), best (blue), discount:90% (yellow)
    bigCard
}) {
    // Локализация
    const Loc = useLocalization("Product")
    const Lang = useLang()

    let className = "product"
    if (bigCard) {
        className += " big"
    }

    const image = require(`../../assets/catalog/${product.image}`)

    return (
        <div className={className} id={`product-${product.id}`} tabIndex="0">
            {/* бейдж */}
            {badge && setBadge(Loc, badge)}

            {/* Изображение товара */}
            <div className="product__image">
                <Image
                    src={image}
                    alt={product.title}
                    priority
                    sizes="200px"
                    fill
                />
            </div>

            {/* Оценка у большой карточки */}
            {bigCard &&
                <div className="product__rate">
                    <div className="product__rate-stars" title={product.rating.rate}>
                        <Image src={svgStar} alt="rate-star" />
                        <Image src={svgStar} alt="rate-star" />
                        <Image src={svgStar} alt="rate-star" />
                        <Image src={svgStar} alt="rate-star" />
                        <Image src={svgStar} alt="rate-star" />
                    </div>
                    <p className="text-gray">({product.rating.count})</p>
                </div>
            }

            {/* Название товара */}
            <h4 className="product__title" title={product.title[Lang]}>{product.title[Lang]}</h4>

            {/* Блок с новой и старой ценой */}
            <div className="product__price-row">
                {product.old_price && <p className="text-light-gray product__price-old">${product.old_price}</p>}
                <p className="text-blue product__price">${product.price}</p>
            </div>

            {/* Описание у большой карточки */}
            {bigCard && <p className="text-gray product__description">{product.description[Lang]}</p>}

            {/* Кнопки у большой карточки */}
            {bigCard && 
                <div className="product__buttons">
                    <button className="outline small" title={Loc.buttonAddToWishlist}><Image src={svgHeart} alt="heart" /></button>
                    <button title={Loc.buttonAddToCard}>
                        <Image src={svgCart} alt="cart" />
                        {Loc.buttonAddToCardText}
                    </button>
                    <button className="outline small" title={Loc.buttonCompare}><Image src={svgEye} alt="eye" /></button>
                </div>
            }

            {/* Блок при наведении */}
            {!bigCard && 
                <div className="product__hover">
                    <button className="white small round" title={Loc.buttonAddToWishlist}><Image src={svgHeart} alt="heart" /></button>
                    <button className="white small round" title={Loc.buttonAddToCard}><Image src={svgCart} alt="cart" /></button>
                    <button className="white small round" title={Loc.buttonCompare}><Image src={svgEye} alt="eye" /></button>
                </div>
            }
        </div>
    )
}
