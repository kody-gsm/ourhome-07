import React, { useState } from "react";
import NavBar from "../components/NavBar";
import QuestionInput from "../components/QuestionInput";
import Answer from "../components/Answer"

export default function Qnaq({ url }) {
  const [isclick, setIsclick] = useState(false);
  return (
    <div className="qnaq">
      <NavBar />
      <QuestionInput isclicked={setIsclick} url={url} />
      <Answer isclicked={isclick} />
    </div>
  );
}
