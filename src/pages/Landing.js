import React from "react";
import kodylogo from "../imgs/kody.png";

export default function Landing() { //처음
  return <div className="landing">
    <div>
      <div><img src={kodylogo} alt='kodylogo' /></div>
      <a href="/welcome"><button>KODY 더 알아보러 가기</button></a>
    </div>
  </div>;
}