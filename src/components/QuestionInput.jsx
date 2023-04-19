import React, { useEffect, useState } from "react";
import envelope from "../assets/envelope-solid.svg";
import axios from "axios";

function QuestionInput() {
  const [question, setQuestion] = useState("");
  const [pushed, setPushed] = useState(false);
  const [res, setRes] = useState("Loading");
  useEffect((e) => {
    setRes("Loading");
  }, []);
  const onQuestionChange = (e) => {
    setQuestion(e.target.value);
  };
  const setting = (e) => {
    setRes(e.message);
  };
  const settingsuccess = (e) => {
    setRes(`질문을 보내는데 성공했어요!`);
  };

  const sendQuestion = async () => {
    console.log("전송버튼이 눌림");
    await axios
      .post("http://192.168.43.147:8000/kody/question", { title: question })
      .then(function (e) {
        console.log(e);
        settingsuccess(e);
      })
      .catch(function (error) {
        console.log(error);
        setting(error);
      });
  };

  const max = (a) => {
    let max = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i].id > max) {
        max = a[i].id;
      }
    }
    return max;
  };

  const resQustion = async () => {
    console.log("전송버튼이 눌림");
    let a = [];
    let b = [];
    await axios
      .post("http://192.168.43.147:8000/kody/answer")
      .then((e) => {
        a = e.data;
        console.log(a.slice(0, max(a)));
      })
      .catch((e) => {
        console.log(e);
      });
    await axios.get("http://192.168.43.147:8000/kody/answer").then((e) => {
      b = e.data;
      console.log(b.slice(0, max(b)));
    });
  };

  return (
    <div className="question">
      {pushed && (
        <div className="popup">
          <div className="background" onClick={(e) => setPushed(false)} />
          <div className="box">
            <p>{res}</p>
          </div>
        </div>
      )}
      <div className="question-part">
        <p className="attention-ment">
          한 번 작성된 내용은 수정이 불가하니 신중히 작성해주세요 ㅠ_ㅠ
        </p>
        <div className="question-area">
          <h1
            className="upper"
            onClick={(e) => {
              resQustion();
              setPushed((e) => true);
            }}
          >
            Q<br />
          </h1>
          <span className="under">.</span>
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
              onClick={(e) => {
                sendQuestion();
                setPushed((e) => true);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionInput;
