import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import SpeedClickGame from "./SpeedClickGame";

const container = document.getElementById("app");
const root = createRoot(container);
const App = () => <SpeedClickGame/>
root.render(<App/>);
