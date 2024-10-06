import Image from "next/image";

import svgHeart from "@/assets/svg/Heart.svg"

import "./Cabinet.scss"

export default function Cabinet() {
    return (
        <section id="cabinet">
            <h5>Здравствуйте, username</h5>
            <button className="orange">Кнопка</button>
            <button className="orange outline big">Кнопка</button>
            <button className="blue">Кнопка</button>
            <button className="blue outline">Кнопка</button>
            <button className="green">Кнопка</button>
            <button className="green outline">Кнопка</button>
            <button className="yellow">Кнопка</button>
            <button className="yellow outline">Кнопка</button>
            <button className="red">Кнопка</button>
            <button className="red outline">Кнопка</button>
            <button className="red small">
                <Image src={svgHeart} alt="rate-star" />
            </button>
        </section>
    );
}
