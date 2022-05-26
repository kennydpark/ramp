import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const input1 = false;
// const input2 = ["element1", "element2", "element3"];
// const input3 = { key: "value" };
// const input4 = 1;

root.render(
  <StrictMode>
    <App input={input1} />
  </StrictMode>
);
