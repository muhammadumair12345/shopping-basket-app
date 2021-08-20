import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import ShoppingBasketApp from "./components/ShoppingBasketApp/ShoppingBasketApp";

ReactDOM.render(
  <React.StrictMode>
    <ShoppingBasketApp />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
reportWebVitals();
