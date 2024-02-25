import "./App.scss";
import "./App.css";
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "./pages/home";
import Quiz from "./pages/quiz";
import House from "./pages/house";
import Poem from "./pages/poem";
import Test from "./pages/test"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/quiz"} element={<Quiz />} />
        <Route path={"/house"} element={<House />}/>
        <Route path={"/poem"} element={<Poem />}/>
        <Route path={"/test"} element={<Test />}/>
      </Routes>
    </div>
  );
}

export default App;
