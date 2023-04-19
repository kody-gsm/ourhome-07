import React, { useEffect, useState } from "react";

function Answer(props) {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [thr, setThr] = useState(false);
  useEffect((e) => {
    // setTimeout(() => {
    //   setOne(true);
    // }, 1000);
    // setTimeout(() => {
    //   setTwo(true);
    // }, 1000);
    // setTimeout(() => {
    //   setThr(true);
    // }, 1000);
  });
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
              <span className={`${one && "dot"} one`}>.</span>
              <span className={`${two && "dot"} two`}>.</span>
              <span className={`${thr && "dot"} thr`}>.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Answer;
