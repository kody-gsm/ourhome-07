import React, { useEffect, useState } from "react";
import kodylogo from '../imgs/kody.png';
import textbox from '../imgs/textbox.png';
import bell from '../imgs/bell.png';
import axios from "axios";

export default function Welcome(prop) {
  const [qnaPairs, setQnaPairs] = useState([]);

  useEffect(() => {
    const fetchQnaPairs = async () => {
      try {
        const response = await axios.post(process.env.REACT_APP_BACKEND_GET_URL);
        setQnaPairs(response.data);
      } catch (error) {
        console.error('Error fetching Q&A pairs:', error);
      }
    };

    fetchQnaPairs();
  }, []);

  const emptyQuestions = new Array(5 - qnaPairs.length).fill({ question: "", answer: "" });

  return (
    <div className="WelcomeScssWelcomeContainer">
      <div className="WelcomeScssMainContents">
        <div className="WelcomeScssLeftCommitContainer">
          <span className="WelcomeScssLeftCommit">
            <img className="WelcomeScssLeftCommitImg" src={textbox} alt="textbox"></img>
            <span className="WelcomeScssCommitText">
              <span className="DailyLifeText">일상생활을</span>
              <span className="KodyText">Kody</span>
              <span className="WillDoItText">해드립니다.</span>
            </span>
          </span>
        </div>
        <div className="WelcomeScssRightCommitContainer">
          <span className="WelcomeScssRightCommit">
            <img className="WelcomeScssRightCommitImg" src={textbox} alt="textbox"></img>
            <span className="WelcomeScssCommitText">
              <span className="AboutClubText">동아리에 대해</span>
              <span className="DetailText">자세한 내용을</span>
              <span className="LetYouKnowText">알아보러 가볼까요 ?</span>
            </span>
          </span>
        </div>
        <div className="WelcomeScssManyQuestionContainer">
          <span className="WelcomeScssManyQuestionBox">
            <span className="WelcomeScssManyQuestionHead">
              <img className="WelcomeScssManyQuestionImg" src={bell} alt="bell"></img>
              <span className="WelcomeScssManyQuestionText">지금 있는 질문들이에요.</span>
            </span>
            <span className="WelcomeScssManyQuestionGrid">
              {qnaPairs.map((qnaPair, index) => (
                <div className="ManyQuestion" key={`qnaPair-${index}`} onClick={() => (window.location.href = '/qna-answers')}>
                  <span className="ManyQuestionContent">
                    <span className="ManyQuestionQnAContainer">
                      <span className="ManyQuestionQnATextBox">
                      </span>
                      <span className="ManyQuestionQnAData">
                        <span className="QuestionContainer">
                          <span className="QuestionTexts">
                            <span>Q. {qnaPair.question || "No question provided"}</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
              ))}
              {emptyQuestions.map((emptyQuestion, index) => (
                <div className="ManyQuestion" key={`emptyQuestion-${index}`}>
                  <span className="ManyQuestionContent">
                    <span className="ManyQuestionQnAContainer">
                      <span className="ManyQuestionQnATextBox">
                      </span>
                      <span className="ManyQuestionQnAData">
                        <span className="QuestionContainer">
                          <span className="QuestionTexts">
                            <span>Q. {emptyQuestion.question || ""}</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
              ))}
              <span className="WelcomeScssManyQuestionDotBox">
                <span className="WelcomeScssManyQuestionDot"></span>
                <span className="WelcomeScssManyQuestionDot"></span>
                <span className="WelcomeScssManyQuestionDot"></span>
              </span>
            </span>
          </span>
          <div className="WelcomeScssQnAButtonContainer">
            <span className="GotoQnAText">직접 질문하고 답변을 받고싶다면?</span>
            <span className="GotoQnAButton" onClick={() => (window.location.href = '/qna-questions')}>Q&A 하러 가기</span>
          </div>
        </div>
      </div>
      <div className="WelcomeScssHeaderKodyImgContainer">
        <img className="WelcomeScssHeaderKodyImg" src={kodylogo} alt="kody logo" onClick={() => (window.location.href = '/')}></img>
      </div>
    </div>
  );
}
