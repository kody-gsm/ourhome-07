import React, { useState } from "react";
import envelope from "../assets/envelope-solid.svg";
import axios from "axios";

function QuestionInput() {
  const [question, setQuestion] = useState("");
  const [pushed, setPushed] = useState(false);
  const onQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const sendQuestion = async () => {
    console.log("전송버튼이 눌림");
    await axios
      .post("http://192.168.43.147:8000/kody/question/", { title: question })
      .catch(function (error) {
        console.log(error);
      })
      .then(function (e) {
        console.log(e);
      });
  };

  return (
    <div className="question">
      <div className="question-part">
        <p className="attention-ment">
          한 번 작성된 내용은 수정이 불가하오니 신중히 작성해주세요 ㅠ_ㅠ
        </p>
        <div className="question-area">
          <h1 className="upper">Q.</h1>
          <div className="question-box">
            <textarea
              type="text"
              placeholder="질문을 입력해주세요"
              className="question-input-box"
              value={question}
              onChange={(e) => {
                onQuestionChange(e);
              }}
            />
            <img
              src={envelope}
              alt="전송"
              className="send-icon"
              onClick={sendQuestion}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionInput;
