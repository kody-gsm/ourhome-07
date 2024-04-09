import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import QuestionInput from "../components/QuestionInput";
import Answer from "../components/Answer";

export default function Qnaq() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState("");

  const handleAdminLogin = async () => {
    try {
      const response = await axios.post(process.env.REACT_APP_BACKEND_GET_CREATE_URL, { password });
  
      setIsAdmin(response.data);
    } catch (error) {
      console.error("어드민 확인 실패", error);
    }
  };
  

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
      
      <input className="AdminreInput"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="운영자 비번 적기"
      />
      <button className="AdminreButton" onClick={handleAdminLogin}>관리자</button>

    </div>
  );
}
