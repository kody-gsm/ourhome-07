import React, { useState } from "react";
import NavBar from "../components/NavBar";
import QuestionInput from "../components/QuestionInput";
import Answer from "../components/Answer"

export default function Qnaq() {
  return (
    <div className="qnaq">
      <NavBar />
      <QuestionInput />
      <Answer />
    </div>
  );
}
