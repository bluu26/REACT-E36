import React from "react";
import { createRoot } from "react-dom/client";
import animals from './data/animals';


const container = document.getElementById("app");
const root = createRoot(container);
root.render(<h1>{animals.length} Animals: {animals.join(", ")}</h1>);
