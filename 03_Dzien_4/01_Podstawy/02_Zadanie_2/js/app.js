import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import LikeBox from "../../02_Zadanie_2/js/LikeBox";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<>
<LikeBox/>
</>);
