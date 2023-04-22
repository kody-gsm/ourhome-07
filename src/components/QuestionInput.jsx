import React, { useEffect, useState } from "react";
import envelope from "../assets/envelope-solid.svg";
import axios from "axios";

function QuestionInput({ isclicked, url }) {
  axios.defaults.withCredentials = true;
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
    isclicked(true);
    await axios
      .post(`${url}/kody/create`, { title: question })
      .then(function (e) {
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
    isclicked(true);
    let answer = [];
    let question = [];
    let returns = [];
    await axios.get(`${url}/kody/answer`).then((e) => {
      question = e.data;
    });
    await axios
      .post(`${url}/kody/answer`)
      .then((e) => {
        answer = e.data;
      })
      .catch((e) => {
        console.log(e);
      });
    for (let i = 0; i < max(question); i++) {
      for (let j = 0; j < max(answer); j++) {
        if (question[i].id === answer[j].id) {
          returns.push({
            id: question[i].id,
            title: question[i].title,
            answer: answer[j].answer,
          });
        }
      }
    }
    localStorage.setItem("answers", JSON.stringify(returns));
    console.log(JSON.parse(localStorage.getItem("answers")));
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
