import React from "react";
import logo from "../imgs/kody.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-area">
      <div className="nav-bar">
        <Link to="/welcome">
          <img src={logo} className="logo-img" alt="logo" />
        </Link>
        <button
          className="btn-qna-more"
          onClick={() => (window.location.href = "/qna-answers")}
        >
          질문들 모아보기
        </button>
      </div>
      <hr />
    </div>
  );
}

export default NavBar;
