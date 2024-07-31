import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import Character from "./components/Character";
import NewCharacter from "./components/NewCharacter";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character" element={<Character />} />
        <Route path="/new" element={<NewCharacter />} />
      </Routes>
    </Router>
  );
}

export default App;
