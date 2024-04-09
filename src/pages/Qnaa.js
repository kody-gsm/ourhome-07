import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import kodylogo from "../imgs/kody.png";

export default function Qnaa() {
  const [questions, setQuestions] = useState(new Map());
  const [answers, setAnswers] = useState(new Map());

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.post(process.env.REACT_APP_BACKEND_GET_URL);
        setQuestions(new Map(Object.entries(response.data)));
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const response = await axios.post(process.env.REACT_APP_BACKEND_ANSWER_URL);
        setAnswers(new Map(Object.entries(response.data)));
      } catch (error) {
        console.error('Error fetching answers:', error);
      }
    };

    fetchAnswers();
  }, []);

  return (
    <div className="qnaa">
      <div className="header">
        <img className="kodylogo" src={kodylogo} alt="kodylogo" onClick={e => window.location.href = 'welcome'} />
        <Link to={'/qna-questions'}><button>Q&A 하러가기</button></Link> 
      </div>
      <hr />
      <div className="main">
        <h2>자주 묻는 질문의 답변이에요!</h2> 
        <ul>
          {[...questions.keys()].map((key, index) => (
              <li key={`question-${index}`}>{questions.get(key)}</li>
          ))}
        </ul>

        <ul>
          {[...answers.keys()].map((key, index) => (
              <li key={`answer-${index}`}>{answers.get(key)}</li>
          ))}
        </ul>
      </div>  
    </div>
  );
}
