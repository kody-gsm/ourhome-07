import React from "react";

function Answer() {
  return (
    <div className="question">
      <div className="question-part">
        <p className="attention-ment">
          답변하는데 시간이 걸릴 수 있어요 조금만 기다려주세요 !
        </p>
        <div className="question-area">
          <h1 className="upper">A .</h1>
          <div className="answer-box">
            <div
              type="text"
              className="answer-input-box answer"
              disabled="disabled"
              ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Answer;
