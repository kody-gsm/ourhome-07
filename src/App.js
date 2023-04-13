import React, { useState } from "react";
import './App.scss';

function App() {
  const [isCp, setIsCp] = useState(false);
  function toast() {
    setIsCp(e => !e);
    setTimeout(() => {
      setIsCp(e => !e);
    }, 3000);
  }
  return <div className="App">
    {isCp && <div className="toast">
      복사됨!
    </div>}
    <div className="main">
      <div>
        <h1>KODY</h1>
        <h3>💡 일상생활의 불편함을 코디해드립니다.</h3>
        <p>저희만의 색깔로 일상생활의 불편함을 코디하는 KODY입니다.</p>
        <p>저희는 <b>ioT와 웹을 접목하는 방식</b>에 흥미를 느껴 이것을 일상생활과 관련시켜 풀어나갈 수 있는
          방법을 찾고 있습니다.</p>
        <p>또한 ioT과에서 배우는 내용들을 직접적으로 웹과 관련시켜 연동해봄으로써 전공에 대해서
          조금 더 다가갈 수 있는 기회를 제공합니다.</p>
        <p>지금은 메인 프로젝트로 개인용 스마트 팜을 개발하고 있고, 서브 프로젝트로 웹 서비스를 개발하고 있습니다.</p><br />
      </div>
      <hr />
      <div>
        <h3>✔️ 저희 KODY만의 특징이에요</h3>
        <ul>
          <li>모두의 의견을 존중하고 수용합니다.<br />
            저희는 의견을 결정할 때 개인의 의견이 아닌 팀원들의 의견을 모아서 결정합니다.</li><br />
          <li>매 전공 동아리 시간 마다 <b>자신이 한 활동을 설명하는 시간</b>을 갖습니다.</li><br />
          <li>뭐든지 함께 <b>협업하고 나아갑시다.</b></li><br />
          <li><b>수평적인 분위기</b>를 지향합니다!</li><br />
        </ul>
      </div>
      <hr />
      <div>
        <h3>✈️ KODY만의 앞으로의 방향성</h3>
        <p>KODY는 앞으로 일상생활에서 불편함을 찾아 해결해 나갈 수 있는 프로젝트들을 진행해 사람들의 불편함을 해소할 생각입니다!</p>
        <p>체계적인 규칙과 활동으로 동아리가 오래 유지될 수 있도록</p><br />
      </div>
      <hr />
      <div>
        <h3>😀 KODY와 함께해주세요! </h3>
        <p>저희는 이런 사람이 좋아요!</p>
        <ul>
          <li>KODY와 끝까지 함께해주실 분!</li><br />
          <li>웹 또는 IoT에 관심 있으신 분!</li><br />
          <li>Kody활동 성실하게 열심히 하실 분!</li><br />
          <li>두려움이 없고 뭐든지 도전할 수 있는 분!</li><br />
        </ul>
      </div>
      <hr />
      <div>
        <h3>👤 KODY와 함께하는 사람들</h3>

        <br /><hr />
        <h3>👋🏻 Kody의 첫 시작을 함께해주세요!</h3>
        <p>Kody에 대해 궁금한 것이 있으면 Discord: <span className="mentioned" onClick={e => {
          try {
            navigator.clipboard.writeText('오영기#1864');
            toast();
          } catch (e) {
            console.log(e);
          }
        }}>오영기#1864</span> 에게 연락해주세요!</p>
      </div>
    </div>
  </div>;
}

export default App;
