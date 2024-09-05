import React from "react";
import { createRoot } from "react-dom/client";
import Box from "../../03_Zadanie_3/js/Box";
import LifeCyclesTester from "../../01_Zadanie_1/js/LifeCyclesTester";


const container = document.getElementById("app");
const root = createRoot(container);

const App = () => <Box />;
root.render(<App />);

