import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import kodylogo from "../imgs/kody.png";

export default function Qnaa() {
  const [questiondata, setQuestiondata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Qresponse = await axios.get('https://aeb1-210-218-52-13.ngrok-free.app/kody/create');
        setQuestiondata(Qresponse.questiondata);
      } catch (error) {
        console.error('tlqkf 집가고싶다', error);
      }
    };

    fetchData();
  }, []);

  const [answerdata, setAnswerdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Aresponse = await axios.get('https://aeb1-210-218-52-13.ngrok-free.app/kody/create');
        setAnswerdata(Aresponse.answerdata);
      } catch (error) {
        console.error('tlqkf 집가고싶다', error);
      }
    };

    fetchData();
  }, []);

  return(
    <div className="qnaa">
      <div className="header">
        <img className="kodylogo" src={kodylogo} alt="kodylogo" onClick={e => window.location.href = 'welcome'} />
        <Link to={'/qna-questions'}><button>Q&A 하러가기</button></Link> 
      </div>
      <hr />
      <div className="main">
        <h2>자주 묻는 질문의 답변이에요!</h2>
        <ul>
          {questiondata.map(item => (
              <li key={item.Qid}>{item.Qtext}</li>
          ))}
          {answerdata.map(item => (
              <li key={item.Aid}>{item.Atext}</li>
          ))}
        </ul>
      </div>  
    </div>
  );
}
