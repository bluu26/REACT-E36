import React from "react";
import { createRoot } from "react-dom/client";

const a = +prompt("podaj 1 liczbe")
const b = Number(prompt("podaj 2 liczbe"))

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<div>{a + b}</div>);
