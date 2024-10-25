"use client"
import { useState, useEffect } from "react"
import CatalogDB from "@/components/Catalog"
import Loader from "@/components/Loader/Loader";

import Image from "next/image";
import imgXbox from "@/assets/catalog/Xbox_consoles_category.png"
import imgProduct2 from "@/assets/catalog-top/product-2.png"
import svgArrowRight from "@/assets/svg/Arrow-right.svg"

import svgPackage from "@/assets/catalog-top/Package.svg"
import svgTrophy from "@/assets/catalog-top/Trophy.svg"
import svgCredit from "@/assets/catalog-top/CreditCard.svg"
import svgHeadphones from "@/assets/catalog-top/Headphones.svg"

import "./CatalogTop.scss"
import "./CatalogTopFeatures.scss"

export default function CatalogTop() {
    const [CatalogData, setCatalogData] = useState([])
    useEffect(() => {
        console.log("CatalogDB", CatalogDB);
        setCatalogData(CatalogDB)
    }, [])

    return (
        <section className="catalog-top">
            <div className="catalog-top__inner">
                {CatalogData.length !== 0
                    ? <div className="catalog-top__row">
                        <div className="catalog-top__big">
                            <div className="column">
                                <div className="column__text">
                                    <div className="line"></div>
                                    <p className="text-dark-blue">The best place to play</p>
                                </div>
                                <h1>Xbox Consoles</h1>
                                <p className="text-gray">Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.</p>
                                <button className="big">
                                    Купить
                                    <Image src={svgArrowRight} alt="arrow-right" />
                                </button>
                            </div>
                            <Image src={imgXbox} alt="xbox" />
                            <p className="catalog-top__big-cost text-white">$299</p>
                        </div>
                        <div className="catalog-top__column">
                            <div className="catalog-top__small">
                                <p className="text-yellow">Summer Sales</p>
                                <h4 className="text-white">New Google Pixel 6 Pro</h4>
                                <button>
                                    Купить
                                    <Image src={svgArrowRight} alt="arrow-right" />
                                </button>
                                <div className="product__badge">
                                    <div className="badge discount big">29% Скидка</div>
                                </div>
                            </div>
                            <div className="catalog-top__small">
                                <Image src={imgProduct2} alt="product" />
                                <div className="column">
                                    <h4>Xiaomi FlipBuds Pro</h4>
                                    <p className="text-blue">$299 USD</p>
                                    <button>
                                        Купить
                                        <Image src={svgArrowRight} alt="arrow-right" />
                                    </button>
                                </div>
                            </div>
                        </div>
                      </div>
                    : <Loader number={5} />
                }
            </div>

            <div className="catalog-top__features">
                <div className="catalog-top__feature-row">
                    <Image src={svgPackage} alt="package" />
                    <div>
                        <p>Fasted Delivery</p>
                        <p className="text-gray">Delivery in 24/H</p>
                    </div>
                </div>
                <div className="hr"></div>
                <div className="catalog-top__feature-row">
                    <Image src={svgTrophy} alt="trophy" />
                    <div>
                        <p>24 Hours Return</p>
                        <p className="text-gray">100% money-back guarantee</p>
                    </div>
                </div>
                <div className="hr"></div>
                <div className="catalog-top__feature-row">
                    <Image src={svgCredit} alt="credit-card" />
                    <div>
                        <p>Secure Payment</p>
                        <p className="text-gray">Your money is safe</p>
                    </div>
                </div>
                <div className="hr"></div>
                <div className="catalog-top__feature-row">
                    <Image src={svgHeadphones} alt="headphones" />
                    <div>
                        <p>Support 24/7</p>
                        <p className="text-gray">Live contact/message</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
