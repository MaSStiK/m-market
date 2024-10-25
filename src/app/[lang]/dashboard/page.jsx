"use client"
import Image from "next/image";
import { useLocalization, useLang } from "@/components/Localization/Localization";

import svgHeart from "@/assets/svg/Heart.svg"

import "./Dashboard.scss"

export default function DashboardPage() {
    // Локализация
    const Loc = useLocalization("Dashboard")
    
    return (
        <section className="dashboard-section">
            <h5>{Loc.helloUsername}</h5>
            <button className="orange">{Loc.button}</button>
            <button className="orange outline big">{Loc.button}</button>
            <button className="blue">{Loc.button}</button>
            <button className="blue outline">{Loc.button}</button>
            <button className="green">{Loc.button}</button>
            <button className="green outline">{Loc.button}</button>
            <button className="yellow">{Loc.button}</button>
            <button className="yellow outline">{Loc.button}</button>
            <button className="red">{Loc.button}</button>
            <button className="red outline">{Loc.button}</button>
            <button className="red small">
                <Image src={svgHeart} alt="rate-star" />
            </button>
        </section>
    );
}
