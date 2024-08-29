import React from "react";
import { createRoot } from "react-dom/client";

function calc(a, b, c){
    return c === "+" ? a + b :
                    c === "-" ? a - b :
                    c === "*" ? a * b :
                    c === "/" ? a / b : null}

const a = +prompt("podaj 1 liczbe");
const b = Number(prompt("podaj 2 liczbe"));
const c = prompt("podaj operator");

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<div>{calc(a, b, c)}</div>)
