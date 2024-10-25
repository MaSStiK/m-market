"use client"
import { useState, useEffect } from "react"
import { useLocalization } from "@/components/Localization/Localization";
import Product from "@/components/Product/Product";
import CatalogDB from "@/components/Catalog"
import Loader from "@/components/Loader/Loader";

import "./CatalogBestDeals.scss"

export default function CatalogBestDeals() {
    // Локализация
    const Loc = useLocalization("CatalogBestDeals")

    const [CatalogData, setCatalogData] = useState([])
    useEffect(() => {
        console.log("CatalogDB", CatalogDB);
        setCatalogData(CatalogDB)
    }, [])

    return (
        <section className="catalog-big-deals">
            <div className="catalog-big-deals__header">
                <h3>{Loc.title}</h3>
                <div className="header">
                    <p>{Loc.bestDealsEnds}</p>
                    <div className="header__timer">{Loc.bestDealsEndsTimer}</div>
                </div>
            </div>
            <div className="catalog-big-deals__inner">
                {CatalogData.length !== 0
                    ? <div className="catalog-big-deals__row">
                        <Product
                            product={CatalogData.find(i => i.id === 1)}
                            // https://calcus.ru/kalkulyator-skidok
                            badge={["discount:35%", "hot"]}
                            bigCard
                        />
                        <div className="catalog-big-deals__grid">
                            <Product product={CatalogData.find(i => i.id === 10)} badge={"hot"} />
                            <Product product={CatalogData.find(i => i.id === 11)} badge={"out"} />
                            <Product product={CatalogData.find(i => i.id === 12)} badge={"sale"} />
                            <Product product={CatalogData.find(i => i.id === 13)} badge={"best"} />
                            <Product product={CatalogData.find(i => i.id === 14)} />
                            <Product product={CatalogData.find(i => i.id === 3)} />
                            <Product product={CatalogData.find(i => i.id === 4)} />
                            <Product product={CatalogData.find(i => i.id === 5)} />
                        </div>
                      </div>
                    : <Loader number={1} />
                }
            </div>
        </section>
    )
}
