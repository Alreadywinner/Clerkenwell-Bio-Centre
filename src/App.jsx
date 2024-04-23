import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import CodeGenerate from "./CodeGenerate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/code-generate" element={<CodeGenerate />} />
      </Routes>
    </Router>
  );
}

export default App;
