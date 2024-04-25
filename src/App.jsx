import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import CodeGenerate from "./CodeGenerate";
import Questionnaire from "./Questionnaire";
import Ticket from "./Ticket";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/code-generate" element={<CodeGenerate />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </Router>
  );
}

export default App;
