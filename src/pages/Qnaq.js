import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";
import QuestionInput from "../components/QuestionInput";
import Answer from "../components/Answer";

export default function Qnaq() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    axios.get("/api/user/isAdmin")
      .then(response => {
        setIsAdmin(response.data.isAdmin);
      })
      .catch(error => {
        console.error("어드민 안 줘", error);
      });
  }, []);

  return (
    <div className="qnaq">
      <NavBar />
      <QuestionInput />
      <Answer />
      {isAdmin && (
        <Link to="/qna-answers-admin">
          <button className="Admin">어드민</button>
        </Link>
      )}
    </div>
  );
}
