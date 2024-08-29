import React from "react";
import { createRoot } from "react-dom/client";

const a = +prompt("podaj 1 liczbe");
const b = Number(prompt("podaj 2 liczbe"));
const c = prompt("podaj operator");

const container = document.getElementById("app");
const root = createRoot(container);
root.render(c === "+" ? <h1>{a + b}</h1> :
                    c === "-" ? <h2>{a - b}</h2> :
                    c === "*" ? <h3>{a * b}</h3> :
                    c === "/" ? <h4>{a / b}</h4> : null);
