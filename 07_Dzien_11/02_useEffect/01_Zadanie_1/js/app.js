import React from "react";
import { createRoot } from "react-dom/client";
import Box from "./Box";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => <Box/>
root.render(<App />);




