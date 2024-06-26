import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function AdminAnswer() {
  const [adminquestion, setAdminquestion] = useState("");
  const [admindata, setAdmindata] = useState(new Map());

  const handleSubmit = async () => {
    try {
      const response = await axios.post(process.env.REACT_APP_BACKEND_POST_GET_URL, { adminquestion });
      console.log(response.data);
      setAdminquestion("");
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const fetchAdmindata = async () => {
      try {
        const response = await axios.post(process.env.REACT_APP_BACKEND_QUESTION_URL);
        const mapData = new Map(Object.entries(response.data));
        setAdmindata(mapData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchAdmindata();
  }, []);

  return(
    <div className="qnaq">
      <NavBar />
      
      <div className="question">
        <div className="question-part">
          <p className="attention-ment">
            GSM 학생들이 kody에 관심이 있나봐요 ㅎ
          </p>
          <div className="question-area">
            <h1 className="upper">Q .</h1>
            <div className="answer-box">
              {[...admindata.entries()].map(([key, value]) => (
                <textarea
                  key={key}
                  type="text"
                  className="answer-input-box answer"
                  disabled="disabled"
                  value={value}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="question">
        <div className="popup"></div>
        <div className="question-part">
          <p className="attention-ment">
            위에 질문에 대한 답변을 적으세요.
          </p>
          <div className="question-area">
            <h1 className="upper">A .</h1>
            <div className="question-box">
              <textarea
                type="text"
                placeholder="답변을 입력해주세요"
                className="question-input-box"
                value={adminquestion}
                onChange={(e) => setAdminquestion(e.target.value)}
              />
              <Link to="/qna-answers">
              <button className="btn-answer" onClick={handleSubmit}>
                보내기
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAnswer;
