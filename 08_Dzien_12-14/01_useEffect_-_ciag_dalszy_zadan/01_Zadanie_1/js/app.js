import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import PropsToState from "./PropsToState";

const container = document.getElementById("app");
const root = createRoot(container);
const App = () => (
    <div>
        <h1>Eloo@oo</h1>
        <PropsToState text='asdasdasd'/>
    </div>)
root.render(<App/>);
