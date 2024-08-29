import React from "react";
import { createRoot } from "react-dom/client";

function Header({ logo, searchPlaceholder }) {
    return (
      <header>
        <a href="#">{logo}</a>
        <form>
          <input placeholder={searchPlaceholder} name="s" />
          <button>Search</button>
        </form>
      </header>
    );
}

function App() {
    return <Header logo="Your company!" searchPlaceholder="Type some words..." />;
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<><App /></>);
