import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserStorage } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserStorage>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserStorage>
  </React.StrictMode>
);
