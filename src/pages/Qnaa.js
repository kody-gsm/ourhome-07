import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import kodylogo from "../imgs/kody.png";

export default function Qnaa() {
  return(
    <div className="qnaa">
      <div className="header">
      <img className="kodylogo" src={kodylogo} alt="kodylogo" onClick={e => window.location.href = 'welcome'} />
      <Link to={'/qna-questions'}><button>Q&A 하러가기</button></Link> 
      </div>
      <hr />
      <div className="main">
        <h2>자주 묻는 질문의 답변이에요!</h2>
      </div>
    </div>
    
  );
}