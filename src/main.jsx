import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { company } from "./data/company";

document.title = `${company.name} | ${company.slogan}`;
document
  .querySelector('meta[name="description"]')
  ?.setAttribute("content", company.description);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);