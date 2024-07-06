import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from "./context/AuthContext.jsx";
import App from "./App.jsx";
import "./index.css";
import { NotificationProvider } from "./context/NotificationContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Router> */}
    <AuthProvider>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </AuthProvider>
    {/* </Router> */}
  </React.StrictMode>
);
