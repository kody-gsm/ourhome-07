import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import kodylogo from "../imgs/kody.png";

export default function Qnaa({ url }) {
  axios.defaults.withCredentials = true;
  const [a, setA] = useState([]);
  const [alen, setAlen] = useState([]);
  const [currentpage, setCurrentpage] = useState(0);

  const max = (a, type) => {
    let max = 0;
    for (let i = 0; i < a.length; i++) {
      if (type === 'q') {
        if (a[i].id > max) {
          max = a[i].id;
        }
      }
      else if (type === 'a') {
        if (a[i].question > max) {
          max = a[i].question;
        }
      }
    }
    // console.log('max', max, type);
    return max;
  };

  const min = (a, type) => {
    let min = 100;
    for (let i = 0; i < a.length; i++) {
      if (type === 'q') {
        if (a[i].id < min) {
          min = a[i].id;
        }
      }
      else if (type === 'a') {
        if (a[i].question < min) {
          min = a[i].question;
        }
      }
      // console.log('min', min, type);
    }
    return min;
  }

  const resQustion = async () => {
    let answer = [];
    let question = [];
    let returns = [];
    await axios
      .get(`${url}/kody/answer`).then((e) => {
        question = e.data;
        // console.log(question.slice(min(question, 'q'), max(question, 'q')), "q");
      }).catch(e => {
        console.log(e);
      });
    await axios
      .post(`${url}/kody/answer`)
      .then((e) => {
        answer = e.data;
        // console.log(answer.slice(min(answer, 'a'), max(answer, 'a')), "a");
      })
      .catch((e) => {
        console.log(e);
      });
    for (let i = min(question, 'q'); i < max(question, 'q'); i++) {
      for (let j = min(answer, 'a'); j < max(answer, 'a'); j++) {
        if (question[i].id === answer[j].question) {
          returns.push({
            id: question[i].id,
            title: question[i].title,
            answer: answer[j].answer,
          });
        }
      }
    }
    localStorage.setItem("answers", JSON.stringify(returns));
    return JSON.parse(localStorage.getItem("answers"));
  };
  async function pushes(position) {
    const a = await resQustion();
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
    //eslint-disable-next-line
  }, []);
  return <div className="qnaa">
    <div className="header">
      <img className="kodylogo" src={kodylogo} alt="kodylogo" onClick={e => window.location.href = 'welcome'} />
      <Link to={'/qna-questions'}><button>Q&A 하러가기</button></Link>
    </div>
    <hr />
    <div className="main">
      <h2>자주 묻는 질문에 대한 답변이에요!</h2>
      <div className="boxes">
        {a.map((i, n) => {
          return i.title && <div className="answerbox" key={n}>
            <div className="div"><b>Q.</b><div className="likeinput"><span>&nbsp;&nbsp;&nbsp;{i.title}</span></div></div>
            <div className="div"><b>A.</b><div className="likeinput"><span>&nbsp;&nbsp;&nbsp;{i.answer}</span></div></div>
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
