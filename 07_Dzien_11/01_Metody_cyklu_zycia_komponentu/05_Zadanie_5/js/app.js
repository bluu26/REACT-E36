import React from "react";
import { createRoot } from "react-dom/client";
import StrobeLight from "./StrobeLight";


const App = () => {
    return (
        <div>
            <h1>Test Strobe Light</h1>
            <StrobeLight color='red' frequency={500} />
            <StrobeLight color='blue' frequency={1000} />
            <StrobeLight color='green' frequency={1500} />
            <StrobeLight color='yellow' frequency={2000} />
        </div>
    )
}
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
