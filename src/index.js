import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/main.scss";

import Dashboard from "./screens/dashboard/Dashboard";
import Login from "./screens/login/Login";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='login' element={<Login />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
