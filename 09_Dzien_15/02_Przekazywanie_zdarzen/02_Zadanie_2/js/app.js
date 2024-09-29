import React from "react";
import { createRoot } from "react-dom/client";
import Shop from "./Shop";

const container = document.getElementById("app");
const root = createRoot(container);
const App = () => <Shop/>
root.render(<App />);
