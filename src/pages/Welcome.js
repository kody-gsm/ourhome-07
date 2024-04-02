import React, { useEffect, useState } from "react";
import kodylogo from '../imgs/kody.png';
import textbox from '../imgs/textbox.png';
import bell from '../imgs/bell.png';
import { Link } from "react-router-dom";
import axios from "axios";

function GetQnAData(prop){
  const[data,setData] = useState(null);
  useEffect(()=>{
    axios.get("")
    .then(
      Response=>{
        setData(Response.data);
      }
    )
    })
  return(
    data
  )
}

function ManyQuestion(num){

  return(
    <div className="ManyQuestion" onClick={()=>(window.location.href = '/qna-answers')}>
      <span className="ManyQuestionContent">
        <span className="ManyQuestionQnAContainer">
          <span className="ManyQuestionQnATextBox">
            <span className="ManyQuestionQnAText">Q</span>
            <span className="ManyQuestionDotText">.</span>
          </span>
          <span className="ManyQuestionQnAData">
            {GetQnAData(num)}
          </span>
        </span>
        <span className="ManyQuestionQnAContainer">
          <span className="ManyQuestionQnATextBox">
            <span className="ManyQuestionQnAText">A</span>
            <span className="ManyQuestionDotText">.</span>
          </span>
          <span className="ManyQuestionQnAData">
            {GetQnAData(num)}
          </span>
        </span>
      </span>
    </div>
  )
}

export default function Welcome(prop) {

  return(
    <div className="WelcomeScssWelcomeContainer">

      <div className="WelcomeScssMainContents">

        <div className="WelcomeScssLeftCommitContainer">
          <span className="WelcomeScssLeftCommit">
            <img className="WelcomeScssLeftCommitImg" src={textbox}></img>
            <span className="WelcomeScssCommitText">
              <span className="DailyLifeText">일상생활을</span>
              <span className="KodyText">Kody</span>
              <span className="WillDoItText">해드립니다.</span>
            </span>
          </span>
        </div>

        <div className="WelcomeScssRightCommitContainer">
          <span className="WelcomeScssRightCommit">
            <img className="WelcomeScssRightCommitImg" src={textbox}></img>
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
              <img className="WelcomeScssManyQuestionImg" src={bell}></img>
              <span className="WelcomeScssManyQuestionText">자주 묻는 질문들이에요</span>
            </span>
            <span className="WelcomeScssManyQuestionGrid">

              {ManyQuestion(1)}
              {ManyQuestion(2)}
              {ManyQuestion(3)}
              {ManyQuestion(4)}

              <span className="WelcomeScssManyQuestionDotBox">
                <span className="WelcomeScssManyQuestionDot"></span>
                <span className="WelcomeScssManyQuestionDot"></span>
                <span className="WelcomeScssManyQuestionDot"></span>
              </span>
            </span>
          </span>
          <div className="WelcomeScssQnAButtonContainer">
            <span className="GotoQnAText">직접 질문하고 답변을 받고싶다면?</span>
            <span className="GotoQnAButton" onClick={()=>(window.location.href = '/qna-questions')}>Q&A 하러 가기</span>
          </div>

        </div>
 
      </div>
      <div className="WelcomeScssHeaderKodyImgContainer">
        <img className="WelcomeScssHeaderKodyImg" src={kodylogo} onClick={()=>(window.location.href='/')}></img>
      </div>

    </div>
  );
}