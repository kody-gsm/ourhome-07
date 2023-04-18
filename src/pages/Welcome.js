import React from "react";
import kodylogo from '../imgs/kody.png';

export default function Welcome() {
  return <div className="welcome">
    <div className="header">
      <img className="kodylogo" src={kodylogo} alt="kodylogo" onClick={e => window.location.href = 'welcome'} />
    </div>
    <div className="main">

    </div>
    <a href="/qna-answers">qna</a>
  </div>;
}
