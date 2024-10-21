import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

// Whatever is inside App.js will be rendered by the html in the id of root //
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
