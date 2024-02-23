import "./App.scss";
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "./pages/home";
import Quiz from "./pages/quiz";
import House from "./pages/house";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/quiz"} element={<Quiz />} />
        <Route path={"/house"} element={<House />}/>
      </Routes>
    </div>
  );
}

export default App;
