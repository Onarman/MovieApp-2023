import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./context/AuthContext.jsx";
import GetMoviesProvider from "./context/GetMoviesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <GetMoviesProvider>
      <App />
    </GetMoviesProvider>
  </AuthContextProvider>
);
