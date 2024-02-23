import "./App.scss";
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "./pages/home";
import Quiz from "./pages/quiz";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/quiz"} element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
