import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  //라우터 감싸기
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
  // root라는 아이디를 찾아서 App에 집어넣어라
);
