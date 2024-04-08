import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import QuestionInput from "../components/QuestionInput";
import Answer from "../components/Answer";

export default function Qnaq() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState(""); // 비밀번호 상태 추가

  const handleAdminLogin = async () => {
    try {
      const response = await axios.post(process.env.REACT_APP_BACKEND_GET_CREATE_URL, { password });
  
      // 백엔드에서 받은 응답이 true이면 어드민으로 설정
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
        onChange={(e) => setPassword(e.target.value)} // 입력값이 변경될 때마다 password 상태 업데이트
        placeholder="운영자 비번 적기"
      />
      <button className="AdminreButton" onClick={handleAdminLogin}>관리자</button>

    </div>
  );
}
