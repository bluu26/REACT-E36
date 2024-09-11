import React from "react";
import { createRoot } from "react-dom/client";
import CustomTitle from "./CustomTitle";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => <CustomTitle/>
root.render(<App />);

