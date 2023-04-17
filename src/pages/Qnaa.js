import React from "react";
import kodylogo from "../imgs/kody.png";

export default function Qnaa() {
  const a = [
    {
      title: "떡볶이가 먹고 싶어요.",
      answer: '드세요.'
    }, {
      title: "엄청 커다란 모기가 나의 발을 물었어요!",
      answer: '약을 발라요.'
    }, {
      title: '당장 집에 달려가고 싶어요.',
      answer: '조금만 참으세요.'
    }, {
      title: '놀라운 사실이 있는데 안 가르쳐줄거에요.',
      answer: '그럼 알리지 마세요.'
    }, {
      title: '맙소사 당장 제 공중제비를 멈추십시오!',
      answer: '병원을 가세요.'
    }
  ]
  return <div className="qnaa">
    <div className="header">
      <img className="kodylogo" src={kodylogo} alt="kodylogo" />
      <button>Q&A 하러가기</button>
    </div>
    <hr />
    <div className="main">
      <h2>자주 묻는 질문에 대한 답변이에요!</h2>
      <div className="boxes">
        {a.map((i, n) => {
          return <div className="answerbox">
            <div className="div"><b>Q.</b><div className="likeinput"><span>{i.title}</span></div></div>
            <div className="div"><b>A.</b><div className="likeinput"><span>{i.answer}</span></div></div>
          </div>;
        })}
      </div>
    </div>
    <div className="labels">

    </div>
  </div>;
}
