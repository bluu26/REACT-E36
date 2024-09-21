import React from "react";
import { createRoot } from "react-dom/client";
import Box from "../../03_Zadanie_3/js/Box";
import Modal from "./Modal";

const App = () => {
  return (
    <div>
      <h1>Test okna modalnego</h1>
      <Modal heading="Zapisz się do newslettera" />
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
