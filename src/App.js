import './App.css';
// import styled from "styled-components";
import Main from "./component/Main";
import Clock from "./component/Clock";
import SearchOcid from "./component/SearchOcid";

// fullpage 라는 라이브러리 사용해서 스크롤 이벤트 맥여볼꺼임
function App() {
  var tDay = new Date();
  (tDay.setDate(tDay.getDate()-18));
  console.log("today = " + tDay.getFullYear() + "-" + tDay.getMonth() + "-" + tDay.getDate());

  return (
    <div>
      <Clock/>
      <Main/>
      <SearchOcid/>
    </div>
  );
}

export default App;
