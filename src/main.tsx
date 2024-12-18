import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ChakraProvider } from "@chakra-ui/react";
import { defaultSystem } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

//https://stackoverflow.com/questions/79148516/property-value-is-missing-in-type-children-element-but-required-in-typ
