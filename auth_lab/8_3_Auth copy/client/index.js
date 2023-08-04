import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import "./index.css"
import { AuthProvider } from "./context/AuthContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
    <AuthProvider>
        <App />
    </AuthProvider>
);
