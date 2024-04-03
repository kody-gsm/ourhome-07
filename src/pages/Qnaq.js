import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import QuestionInput from "../components/QuestionInput";
import Answer from "../components/Answer"

export default function Qnaq() {
  return (
    <div className="qnaq">
      <NavBar />
      <QuestionInput />
      <Answer />
      <Link to="/qna-answers-admin">
      <button className="Admin">어드민</button>
      </Link>
    </div>
  );
}
