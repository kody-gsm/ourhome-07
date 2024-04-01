import React, { useEffect, useState } from "react";
// import envelope from "../assets/envelope-solid.svg";
import axios from "axios";

function QuestionInput() {
  return(
    <div className="question">
      <div className="popup">

      </div>
      <div className="question-part">
        <p className="attention-ment">
          한 번 작성된 내용은 수정이 불가하니 신중히 작성해주세요 ㅠ_ㅠ
        </p>
        <div className="question-area">
          <h1
            className="upper"
            >
          Q . 
          </h1>
          <div className="question-box">
            <textarea
              type="text"
              placeholder="질문을 입력해주세요"
              className="question-input-box" 
              />
              <button className="btn-answer">보내기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionInput;
