import "./App.css";
import { AuthProvider } from "./components/AuthContext";
import Course from "./pages/Course";
import Home from "./pages/Home";
import Form from "./pages/CourseForm";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Form2 from "./pages/CourseForm";
import PrincipalFilter from "./components/PrincipalFilter";
import Login from "./pages/Login";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/home" element={<Home />} />
        <Route path="/course" element={<Course />} />

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>No pagina</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>;
}

export default App;
