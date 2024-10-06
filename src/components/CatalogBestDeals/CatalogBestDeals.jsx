"use client"
import { useState, useEffect } from "react"
import Image from "next/image";
import Product from "@/components/Product/Product";
import CatalogDB from "@/components/Catalog"
import Loader from "@/components/Loader/Loader";

import "./CatalogBestDeals.scss"

export default function CatalogBestDeals() {
    const [CatalogData, setCatalogData] = useState([])
    useEffect(() => {
        console.log("CatalogDB", CatalogDB);
        setCatalogData(CatalogDB)
    }, [])

    return (<>
        <div className="catalog-big-deals">
            <div className="catalog-big-deals__header">
                <h3>Best Deals</h3>
                <div className="header">
                    <p>Deals ends in</p>
                    <div className="header__timer">16d : 21h : 57m : 23s</div>
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
                            <Product product={CatalogData.find(i => i.id === 2)} badge={"hot"} />
                            <Product product={CatalogData.find(i => i.id === 3)} badge={"out"} />
                            <Product product={CatalogData.find(i => i.id === 4)} badge={"sale"} />
                            <Product product={CatalogData.find(i => i.id === 5)} badge={"best"} />
                            <Product product={CatalogData.find(i => i.id === 19)} />
                            <Product product={CatalogData.find(i => i.id === 20)} />
                            <Product product={CatalogData.find(i => i.id === 21)} />
                            <Product product={CatalogData.find(i => i.id === 22)} />
                        </div>
                      </div>
                    : <Loader number={1} />
                }
            </div>
        </div>
    </>)
}
