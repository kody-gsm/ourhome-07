import React, { useEffect, useState } from "react";
import kodylogo from "../imgs/kody.png";

export default function Qnaa() {
  const [a, setA] = useState([]);
  const [alen, setAlen] = useState([]);
  const [currentpage, setCurrentpage] = useState(0);
  function pushes(position) {
    const a = [
      {
        title: '난 이제 지쳤어요',
        answer: '땡벌!'
      }, {
        title: '당신은 저에게 엄청난 것을 훔쳐갔습니다.',
        answer: '찾아가세요.'
      }, {
        title: '미안하다 이거 보여주려고 어그로 끌었다 나루토 사스케 싸움 ㄹㅇ실화냐?',
        answer: '실화 아닙니다.'
      }, {
        title: "저는 sw개발학과인데 iot에 분야를 생각하고 있어요.",
        answer: '언제든지 환영입니다.'
      }, {
        title: "저는 웹 프로젝트를 주로 하고 싶어요.",
        answer: '서브 프로젝트로 웹 프로젝트를 기획중입니다.'
      }, {
        title: '선배와 자주 이야기 하고 싶어요.',
        answer: '여기 오면 많이 하게 됩니다.'
      }, {
        title: '놀라운 사실이 있는데 안 가르쳐줄거에요.',
        answer: '그럼 알리주지 마세요.'
      }, {
        title: '맙소사 당장 제 공중제비를 멈추십시오!',
        answer: '병원을 가세요.'
      },
    ];
    let crntposi = a.length - (5 * position);
    let topush = [
      (crntposi - 1 >= 0) && a[crntposi - 1],
      (crntposi - 2 >= 0) && a[crntposi - 2],
      (crntposi - 3 >= 0) && a[crntposi - 3],
      (crntposi - 4 >= 0) && a[crntposi - 4],
      (crntposi - 5 >= 0) && a[crntposi - 5],
    ];
    setA(e => topush);
    setAlen(e => {
      let arr = [];
      for (let i = 0; i <= (a.length - 1) / 5; i++) {
        arr.push(i);
      }
      return arr;
    });
  }
  useEffect(e => {
    pushes(0);
  }, []);
  return <div className="qnaa">
    <div className="header">
      <img className="kodylogo" src={kodylogo} alt="kodylogo" onClick={e => window.location.href = 'welcome'} />
      <a href="qna-questions"><button>Q&A 하러가기</button></a>
    </div>
    <hr />
    <div className="main">
      <h2>자주 묻는 질문에 대한 답변이에요!</h2>
      <div className="boxes">
        {a.map((i, n) => {
          return i.title && <div className="answerbox" key={n}>
            <div className="div"><b>Q.</b><div className="likeinput"><span>{i.title}</span></div></div>
            <div className="div"><b>A.</b><div className="likeinput"><span>{i.answer}</span></div></div>
          </div>;
        })}
      </div>
    </div>
    <div className="labels">
      {alen.map((i, n) => {
        return <label key={n} className={(currentpage === i) ? 'bold' : ''}
          onClick={e => { setCurrentpage(c => i); pushes(i); }}>
          {i + 1}</label>
      })}
    </div>
  </div>;
}
