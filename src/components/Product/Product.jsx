"use client"
import { useLocalization, useLang } from "@/components/Localization/Localization";

import Image from "next/image";
import svgStar from "@/assets/svg/Star-yellow.svg"
import svgHeart from "@/assets/svg/Heart.svg"
import svgCart from "@/assets/svg/ShoppingCart.svg"
import svgEye from "@/assets/svg/Eye-open.svg"

import "./Product.scss"
import "./Badge.scss"

function setBadge(badges) {
    // Если badge один, а не массив - приводим к массиву
    if (!Array.isArray(badges)) {
        badges = [badges]
    }

    return (
        <div className="product__badge">
            {badges.map((badge, i) => {
                badge = badge.toLowerCase()

                if (badge === "hot") return <p className={`badge ${badge}`} key={i}>Хит</p>
                if (badge === "out") return <p className={`badge ${badge}`} key={i}>Нет в наличии</p>
                if (badge === "sale") return <p className={`badge ${badge}`} key={i}>Распродажа</p>
                if (badge === "best") return <p className={`badge ${badge}`} key={i}>Лучшие предложение</p>

                if (badge.startsWith("discount")) {
                    let badgeSplit = badge.split(":")
                    return <p className={`badge ${badgeSplit[0]}`} key={i}>{badgeSplit[1]} скидка</p>
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
    // const Loc = useLocalization("header")
    const Lang = useLang()

    let className = "product"
    if (bigCard) {
        className += " big"
    }

    const image = require(`../../assets/catalog/${product.image}`)

    return (
        <div className={className} id={`product-${product.id}`} tabIndex="0">
            {/* бейдж */}
            {badge && setBadge(badge)}

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
                    <button className="outline small" title="Добавить в избранное"><Image src={svgHeart} alt="heart" /></button>
                    <button title="Добавить в корзину">
                        <Image src={svgCart} alt="cart" />
                        В корзину
                    </button>
                    <button className="outline small" title="Сравнить"><Image src={svgEye} alt="eye" /></button>
                </div>
            }

            {/* Блок при наведении */}
            {!bigCard && 
                <div className="product__hover">
                    <button className="white small round" title="Добавить в избранное"><Image src={svgHeart} alt="heart" /></button>
                    <button className="white small round" title="Добавить в корзину"><Image src={svgCart} alt="cart" /></button>
                    <button className="white small round" title="Сравнить"><Image src={svgEye} alt="eye" /></button>
                </div>
            }
        </div>
    )
}
