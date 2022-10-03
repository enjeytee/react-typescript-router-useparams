import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { BrowserRouter as Router } from "react-router-dom";

const rootContainer: Element = document.getElementById("root") as HTMLDivElement;

ReactDOM.createRoot(rootContainer).render(
    <Router>
        <App />
    </Router>
)