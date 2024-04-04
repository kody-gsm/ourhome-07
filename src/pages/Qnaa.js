import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import kodylogo from "../imgs/kody.png";

export default function Qnaa() {
  const [questiondata, setQuestiondata] = useState([]);
  const [answerdata, setAnswerdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://aeb1-210-218-52-13.ngrok-free.app/kody/create');
        // 서버로부터 받아온 데이터에서 질문과 답변을 분리하여 처리
        setQuestiondata(response.data.map(item => item.Qtext));
        setAnswerdata(response.data.map(item => item.Atext));
      } catch (error) {
        console.error('Please kill me....', error);
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
          {/* 질문과 답변을 각각의 리스트로 출력 */}
          {questiondata.map((item, index) => (
              <li key={`question-${index}`}>{item}</li>
          ))}
          {answerdata.map((item, index) => (
              <li key={`answer-${index}`}>{item}</li>
          ))}
        </ul>
      </div>  
    </div>
  );
}
