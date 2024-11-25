import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Pastikan App.js berada di folder src
import "bootstrap/dist/css/bootstrap.min.css"; // Mengimpor file CSS Bootstrap

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App /> {/* Merender komponen App ke dalam elemen root */}
  </React.StrictMode>
);
