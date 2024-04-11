import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import kodylogo from "../imgs/kody.png";

export default function Qnaa() {
  const [qnaPairs, setQnaPairs] = useState([]);

  useEffect(() => {
    const fetchQnaPairs = async () => {
      try {
        const response = await axios.post(process.env.REACT_APP_BACKEND_GET_URL);
        setQnaPairs(response.data);
      } catch (error) {
        console.error('Error fetching Q&A pairs:', error);
      }
    };

    fetchQnaPairs();
  }, []);

  return (
    <div className="qnaa">
      <div className="header">
        <img className="kodylogo" src={kodylogo} alt="kodylogo" onClick={e => window.location.href = 'welcome'} />
        <Link to={'/qna-questions'}><button>Q&A 하러가기</button></Link> 
      </div>
      <hr />
      <div className="main">
        <h2>모든 질문과 답변들이에요!</h2> 
        <ul>
          {qnaPairs.map((qnaPair, index) => (
            <div className="boxes">
              <div className="answerbox" key={`qnaPair-${index}`}>
                <div className="div"><h1 className="upper">Q .</h1><div className="likeinput"><span>{qnaPair.question}</span></div></div>
                <div className="div"><h1 className="upper-a">A .</h1><div className="likeinput-a"><span>{qnaPair.answer}</span></div></div>
              </div>
            </div>
          ))}
        </ul>
        <h2>F5를 눌러 답변이 왔는지 오지 않았는지 확인해 보세요!</h2>
      </div>  
    </div>
  );
}
