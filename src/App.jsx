import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../pages/AppLayout";
import Home from "../pages/Home";
import Exams from "../pages/Exams";
import Programs from "../pages/Programs";
import Scholarships from "../pages/Scholarships";
import TestSeries from "../pages/TestSeries";
import StudyMaterilas from "../pages/StudyMaterilas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/test-series" element={<TestSeries />} />
          <Route path="/study-material" element={<StudyMaterilas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
