import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Maths from "./Pages/class6-subs/Maths";
import Physics from "./Pages/class6-subs/Physics";
import Chemistry from "./Pages/class6-subs/Chemistry";
import AllCoursesPage from "./components/CourdsesPages/CoursesPages";
import Class6 from "./components/classes/class-6/class6";
import Class7 from "./components/classes/class-7/class7";
import Class8 from "./components/classes/class-8/class8";
import Class9 from "./components/classes/class-9/class9";
import Class10 from "./components/classes/class-10/class10";
import Class11 from "./components/classes/class-11/class11";
import Class12 from "./components/classes/class-12/class12";
import NEET from "./components/classes/NeetCourses/NeetCourses";
import JEE from "./components/classes/JEECourses/JeeCourses";

function App() {
  return (
    <div className="w-screen">
      {/* Wrap everything with a single Router */}
      <Router>
        <Routes>
          <Route path="/" element={<AllCoursesPage />} />
          <Route path="/class-6" element={<Class6 />} />
          <Route path="/class-6/maths" element={<Maths />} />
          <Route path="/class-6/physics" element={<Physics />} />
          <Route path="/class-6/chemistry" element={<Chemistry />} />
          <Route path="/class-7" element={<Class7 />} />
          <Route path="/class-8" element={<Class8 />} />
          <Route path="/class-9" element={<Class9 />} />
          <Route path="/class-10" element={<Class10 />} />
          <Route path="/class-11" element={<Class11 />} />
          <Route path="/class-12" element={<Class12 />} />
          <Route path="/neet" element={<NEET />} />
          <Route path="/jee" element={<JEE />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;