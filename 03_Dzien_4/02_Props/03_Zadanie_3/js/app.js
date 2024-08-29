import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import Sum from "./costam";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<div><>
    <Sum numbers={[1, 2, 42, 5]}/>
</></div>);
