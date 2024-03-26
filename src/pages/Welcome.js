import React, { useState } from "react";
import kodylogo from '../imgs/kody.png';
import textbox from '../imgs/textbox.png';
import arrow from '../imgs/arrow.png';
import bell from '../imgs/bell.png';
import bell_act from '../imgs/bell_act.png';
import { Link } from "react-router-dom";

export default function Welcome() {
  const [oning, setOning] = useState(false);
  let scrolling = window.scrollY;
  window.onscroll = e => {
    if (oning === false && window.scrollY - scrolling > 80) {
      setOning(true);
      setTimeout(() => {
        setOning(false);
      }, 1000);
    }
    scrolling = window.scrollY;
  };
  return <div className="welcome">
    <div className="header">
      <img className="kodylogo" src={kodylogo} alt="kodylogo" onClick={e => window.location.href = 'welcome'} />
    </div>
    <div className="main">
      <div className={"firbox"}>
        <span>일상생활을<br /></span> <span className="span">Kody</span>
        <div className="jbox">
          <span>해드립니다.</span>
        </div>
        <img src={textbox} alt={'textbox'} />
      </div>
      <div className="secbox">
        <div className="tb"><span>동아리에 대한 자세한 내용이</span><br /><span>알고 싶나요?</span></div>
        <img className="img" src={textbox} alt={'textbox'} />
        <a href="https://kody-team.notion.site/KODY-9216cc8e50cb4705823d4f87393addb6">Kody notion으로 가기
          <img src={arrow} alt='arrow' /> </a>
      </div>
    </div>
    <div className="qna">
      <div className="title">
        <img src={oning ? bell_act : bell} className={oning ? 'active' : 'div'} onClick={e => {
          if (oning === false) {
            setOning(true);
            setTimeout(() => {
              setOning(false);
            }, 1000);
          }
        }} alt="bell" />
        <div>자주 묻는 질문들이에요!</div>
      </div>
      <div className={"exanswer " + (oning ? 'act' : '')}>
        <div className="answer">Q. Kody에 대해서 궁금해요!</div>
        <div className="answer">Q. 웹은 어떤 동작으로 진행되나요?</div>
        <div className="answer">Q. kody 만의 동아리 운영방식이 궁금해요.</div>
        <div className="answer">Q. kody는 어떻게 만들어지게 됐나요?</div>
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
      <div className="bottom">
        <div className="asdf">
          <span>직접 질문하고 답변을 받고 싶다면?</span><br />
          <Link to={'/qna-answers'}><button>Q&A 하러 가기</button></Link>
        </div>
      </div>
    </div>
  </div >;
}
