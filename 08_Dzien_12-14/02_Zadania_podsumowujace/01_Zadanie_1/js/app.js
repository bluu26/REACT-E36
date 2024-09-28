import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import AnotherColor from "./AnotherColor";

const container = document.getElementById("app");
const root = createRoot(container);
const App = () => <AnotherColor/>
root.render(<App/>);
