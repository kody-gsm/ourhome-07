import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import kodylogo from "../imgs/kody.png";

export default function Qnaa() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://aeb1-210-218-52-13.ngrok-free.app/kody/create');
        setData(response.data);
      } catch (error) {
        console.error('에러 뜸', error);
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
          {data.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>  
    </div>
  );
}
