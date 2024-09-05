import React, { Component } from "react";
import { createRoot } from "react-dom/client";

function ShopItemHeader({title, image}) {
    return (
        <header>
            <h1>{title}</h1>
            <img src={image}/>
        </header>
    )
}

function ShopItemDescription({description}) {
    return (
        <article>
            <p>{description}</p>
        </article>
    )
}

function ShopItemPricing({price}) {
    return (
        <footer>
            Cena: {price} zł
            <button>Kup!</button>
        </footer>
    )
}

function ShopItem({
 title, image, description, price }) {
    return (
        <section>
            <ShopItemHeader title={title} image={image} />
            <ShopItemDescription description={description} />
            <ShopItemPricing price={price} />
        </section>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
    <ShopItem
        title="MacBook Pro"
        image="https://bit.ly/2EEtduD"
        description="Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania."
        price={9999}
    />
);
