import { AuthProvider } from './components/AuthContext';
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Login from "./pages/Login";
import Course from "./pages/Course";
import Home from "./pages/Home";

export const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>No pagina</h1>} />
        </Route>
    )
);