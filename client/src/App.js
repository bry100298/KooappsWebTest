import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MyPage from "./components/MyPage";

function App() {
  return (
    <div className="App">
      <h1>React PHP API MySql</h1>
      <BrowserRouter />
      <MyPage />
    </div>
  );
}

export default App;
