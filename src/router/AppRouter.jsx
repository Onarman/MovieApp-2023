import { useContext } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";

const AppRouter = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  function PrivateRouter() {
    return currentUser ? <Outlet /> : <Navigate to="/login" />;
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details/:id" element={<PrivateRouter />}>
            <Route path="" element={<MovieDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
