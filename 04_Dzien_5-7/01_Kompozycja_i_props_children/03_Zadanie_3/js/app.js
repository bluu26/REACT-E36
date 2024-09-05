import React, { Component } from "react";
import { createRoot } from "react-dom/client";

function ShopItemHeader({ title, image }) {
  return (
    <header>
      <h1>{title}</h1>
      <img src={image}/>
    </header>
  );
}

// ShopList component
function ShopList({ items }) {
  return (
    <div className="shoplist">
      {items.map((item, index) => (
        <ShopItemHeader key={index} title={item.title} image={item.image} />
      ))}
    </div>
  );
}

const items = [
  {
    title: "Mysz komputerowa",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg",
  },
  {
    title: "Klawiatura",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png",
  },
  {
    title: "Laptop programisty",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg",
  },
];


const container = document.getElementById("app");
const root = createRoot(container);
root.render(<ShopList items={items} />);
