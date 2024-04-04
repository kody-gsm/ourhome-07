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

//백엔드에서 받아온 데이터를 response.data로 처리하면서!
//그리고 map 함수 써서 각각의 질문과 답변을 분리함
//questiondata와 answerdata state에 저장해놓고
//저장된 데이터를 map 함수를 사용하여 각각의 리스트 아이템으로 출력함