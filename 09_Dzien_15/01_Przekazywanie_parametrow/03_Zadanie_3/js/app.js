import React from "react";
import { createRoot } from "react-dom/client";
import CrazyDiv from "./CrazyDiv";

const container = document.getElementById("app");
const root = createRoot(container);
const App = () => <CrazyDiv/>
root.render(<App />);
