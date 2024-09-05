import React, { Component } from "react";
import { createRoot } from "react-dom/client";

function GrandChildComponent({children}) {
    return ( <div>{children}</div>
    );
}

function ChildComponent({children}) {
    return ( <div><GrandChildComponent>{children}</GrandChildComponent></div>
    );
}

function ParentComponent({children}) {
    return ( <div><ChildComponent>{children}</ChildComponent></div>
    );
}




const container = document.getElementById("app");
const root = createRoot(container);
root.render(<ParentComponent><h1>To działa</h1></ParentComponent>);
