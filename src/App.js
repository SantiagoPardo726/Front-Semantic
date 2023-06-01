import './App.css';
import { AuthProvider } from './components/AuthContext';
import Course from './pages/Course';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/home" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>No pagina</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
