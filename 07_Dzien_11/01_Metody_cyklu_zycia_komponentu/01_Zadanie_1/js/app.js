import React from "react";
import { createRoot } from "react-dom/client";
import LifeCyclesTester from "./LifeCyclesTester";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => <LifeCyclesTester />;
root.render(<App />);
