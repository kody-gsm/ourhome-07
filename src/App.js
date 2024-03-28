import axios from "axios";
import React, { useState } from "react";
import { Routes, Route, BrowserRouter, Navigate, Link } from "react-router-dom";
import './App.scss';
import Qnaa from "./pages/Qnaa";
import Qnaq from "./pages/Qnaq";
import Welcome from "./pages/Welcome";

export default function App() {
  axios.defaults.withCredentials = true;
  const url = "https://d55e-210-218-52-13.ngrok-free.app/welcome/kody";
  return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to={'/'} replace />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/qna-questions" element={<Qnaq url={url} />} />
        <Route path="/qna-answers" element={<Qnaa url={url} />} />
      </Routes>
    </BrowserRouter>
  </div>;
}
