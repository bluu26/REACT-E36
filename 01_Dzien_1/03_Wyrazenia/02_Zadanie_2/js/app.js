import React from "react";
import { createRoot } from "react-dom/client";

const yearbirth = +prompt("podaj rok urodzenia")

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<div>{new Date().getFullYear() - yearbirth}</div>);
