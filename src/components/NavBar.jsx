import React from "react";
import logo from "../assets/logo.png";
import "../styles/nav.css";

function NavBar() {
  return (
    <div className="nav-area">
      <div className="nav-bar">
        <img src={logo} className="logo-img" />
        <button className="btn-qna-more">질문들 모아보기</button>
      </div>
      <hr />
    </div>
  );
}

export default NavBar;
