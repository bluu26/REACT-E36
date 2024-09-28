import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import MathQuestionGame from "./MathQuestionGame";

const container = document.getElementById("app");
const root = createRoot(container);
const App = () => <MathQuestionGame/>
root.render(<App/>);
