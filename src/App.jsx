import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import Character from "./components/Character";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character" element={<Character />} />
      </Routes>
    </Router>
  );
}

export default App;
