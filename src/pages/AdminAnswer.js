import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";

function AdminAnswer() {

  const [adminquestion, setAdminquestion] = useState("");

  
  const handleSubmit = async () => {
    try {
      
      const response = await axios.post('https://9ea1-152-67-210-200.ngrok-free.app/kody/create', { adminquestion });
      console.log(response.data);
       

      
      setAdminquestion("");
    } catch (error) {
      console.error('되겠냐?!', error);
      // 오류 처리
    }
  };

  const [admindata, setAdmindata] = useState([]);

  useEffect(() => {
    const fetchadmindata = async () => {
      try {
        const response = await axios.get('https://9ea1-152-67-210-200.ngrok-free.app/kody/Question');
        setAdmindata(response.admindata);
      } catch (error) {
        console.error('아잇 싯팔', error);
      }
    };

    fetchadmindata();
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
            <textarea
              type="text"
              className="answer-input-box answer"
              disabled="disabled"
              value={admindata}
              ></textarea>
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
            <button className="btn-answer" onClick={handleSubmit}>
              보내기
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
  }
export default AdminAnswer;
