"use client"
import { useState, useEffect } from "react"
import { useLocalization } from "@/components/Localization/Localization";
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
    // Локализация
    const Loc = useLocalization("CatalogTop")

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
                                    <p className="text-dark-blue">{Loc.theBestPlaceToPlay}</p>
                                </div>
                                <h1>{Loc.xboxConsoles}</h1>
                                <p className="text-gray">{Loc.saveUp}</p>
                                <button className="big">
                                    {Loc.buttonBuy}
                                    <Image src={svgArrowRight} alt="arrow-right" />
                                </button>
                            </div>
                            <Image src={imgXbox} alt="xbox" priority={true} />
                            <p className="catalog-top__big-cost text-white">$299</p>
                        </div>
                        <div className="catalog-top__column">
                            <div className="catalog-top__small">
                                <p className="text-yellow">{Loc.summerSales}</p>
                                <h4 className="text-white">{Loc.newGooglePixel}</h4>
                                <button>
                                    {Loc.buttonBuy}
                                    <Image src={svgArrowRight} alt="arrow-right" />
                                </button>
                                <div className="product__badge">
                                    <div className="badge discount big">{Loc.badge}</div>
                                </div>
                            </div>
                            <div className="catalog-top__small">
                                <Image src={imgProduct2} alt="product" />
                                <div className="column">
                                    <h4>{Loc.xiaomiFlipBudsPro}</h4>
                                    <p className="text-blue">$299 USD</p>
                                    <button>
                                        {Loc.buttonBuy}
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
                        <p>{Loc.features.title1}</p>
                        <p className="text-gray">{Loc.features.subTitle1}</p>
                    </div>
                </div>
                <div className="hr"></div>
                <div className="catalog-top__feature-row">
                    <Image src={svgTrophy} alt="trophy" />
                    <div>
                        <p>{Loc.features.title2}</p>
                        <p className="text-gray">{Loc.features.subTitle2}</p>
                    </div>
                </div>
                <div className="hr"></div>
                <div className="catalog-top__feature-row">
                    <Image src={svgCredit} alt="credit-card" />
                    <div>
                        <p>{Loc.features.title3}</p>
                        <p className="text-gray">{Loc.features.subTitle3}</p>
                    </div>
                </div>
                <div className="hr"></div>
                <div className="catalog-top__feature-row">
                    <Image src={svgHeadphones} alt="headphones" />
                    <div>
                        <p>{Loc.features.title4}</p>
                        <p className="text-gray">{Loc.features.subTitle4}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
