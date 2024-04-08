import React, { useState } from "react";
import axios from "axios";
import sendFail from "../imgs/sendFail.png";
import sendSuccess from "../imgs/sendSuccess.png";

function QuestionInput() {
  const [question, setQuestion] = useState("");
  const [questionSendPage, setQuestionSendPage] = useState(<span></span>);
  
  const handleSubmit = async () => {
    if (!question.trim()) {
      
      return;
    }

    try {

      const response = await axios.post(process.env.REACT_APP_BACKEND_POST_CREATE_URL, { question });
      console.log(response.data); 
      
      setQuestion("");  
      setQuestionSendPage(
        <span className="sendBack" onClick={()=>(setQuestionSendPage(<span/>))}>
          <img className="sendImg" src={sendSuccess}></img>
        </span>
      );
      
    } catch (error) {
      console.error('되겠냐?!', error);
      // 오류 처리
      setQuestionSendPage(
        <span className="sendBack" onClick={()=>(setQuestionSendPage(<span/>))}>
          <img className="sendImg" src={sendFail}></img>
        </span>
      );

    }
  };


  return(
    <div className="question">
      <div className="popup">
        {questionSendPage}
      </div>
      <div className="question-part">
        <p className="attention-ment">
          한 번 작성된 내용은 수정이 불가하니 신중히 작성해주세요 ㅠ_ㅠ
        </p>
        <div className="question-area">
          <h1 className="upper">Q .</h1>
          <div className="question-box">
            <textarea
              type="text"
              placeholder="질문을 입력해주세요"
              className="question-input-box"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <button className="btn-answer" onClick={handleSubmit}>
              보내기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionInput;
