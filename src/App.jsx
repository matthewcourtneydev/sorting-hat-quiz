import "./App.scss";
import "./App.css";
import { useState } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Quiz from "./pages/quiz";
import MyHouse from "./pages/my-house";
import Poem from "./pages/poem";

function App() {
  const [userInfo, setUserInfo] = useState(localStorage.getItem("mdc_sorting_hat_user_info")|| {});
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Signup setUserInfo={setUserInfo} userInfo={userInfo}/>} />
        <Route path={"/login"} element={<Login setUserInfo={setUserInfo} userInfo={userInfo}/>} />
        <Route path={"/quiz-start"} element={<Home userInfo={userInfo} />} />
        <Route path={"/quiz"} element={<Quiz setUserInfo={setUserInfo} userInfo={userInfo}/>} />
        <Route path={"/house"} element={<MyHouse setUserInfo={setUserInfo} userInfo={userInfo} />}/>
        <Route path={"/poem"} element={<Poem />}/>
      </Routes>
    </div>
  );
}

export default App;
