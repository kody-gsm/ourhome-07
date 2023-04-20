import React from "react";

function Answer({ isclicked }) {
  return (
    <div className="question">
      <div className="question-part">
        <p className="attention-ment">
          답변하는데 시간이 걸릴 수 있어요 조금만 기다려주세요 !
        </p>
        <div className="question-area">
          <h1 className="upper">A</h1>
          <br />
          <span className="under">.</span>
          <div className="answer-box">
            <div
              type="text"
              className="answer-input-box answer"
              disabled="disabled"
            >
              <span className={`${isclicked && "one"} dot`}>.</span>
              <span className={`${isclicked && "two"} dot`}>.</span>
              <span className={`${isclicked && "thr"} dot`}>.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Answer;
