import Header from "../src/assets/Header/Header";
import About from "./assets/About/About";
import "../src/App.scss";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="main-wrapper">
      <Header />

      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
