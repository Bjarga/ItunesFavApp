import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Get the container element where your React app will be attached.
const container = document.getElementById("root");

// Create a root.
const root = createRoot(container);

// Render your app within the <React.StrictMode> to enable strict mode checks.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
