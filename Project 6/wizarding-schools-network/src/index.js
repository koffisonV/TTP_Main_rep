import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Root from "./components/Root";
import { CampusesProvider } from "./context/CampusesContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <CampusesProvider>
        <Root />
      </CampusesProvider>
    </Router>
  </React.StrictMode>
);
