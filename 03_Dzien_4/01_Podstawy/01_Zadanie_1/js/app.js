import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import Search from "./search"
import Search2 from "./search2"


const container = document.getElementById("app");
const root = createRoot(container);
root.render(<>
    <Search />
    <Search2 />
    </>);
