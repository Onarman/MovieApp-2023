import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { GetMovies } from "../context/GetMoviesContext";

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const { getMovies, apiUrl, setMovies, setLoading } = useContext(GetMovies);
  // eğer {currentUser} şeklinde yazmazsak currentUser'ın değerine değil value içindeki currentUser a eşitlenir.bu yüzden currentUser null döner
  const navigate = useNavigate();

  const handleReloadMovies = async() => {
    try {
      setLoading(true); // Yükleme durumunu true olarak ayarla
      const res = await getMovies(apiUrl); // Tüm filmleri yeniden yükle
      // setMovies(res); // Yeni filmleri ayarla
      setMovies(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Yükleme durumunu false olarak ayarla
    }
  };

  const logout = () => {
    setCurrentUser(false);
    navigate("/");
    console.log("loggedout");
  };

  return (
    <div className="container-navbar">
      <Link to={"/"}>
        <h3 onClick={handleReloadMovies}>React Movie App</h3>
      </Link>

      {currentUser ? (
        <div className="buttons-usern">
          <h5>{currentUser.name}</h5>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div className="buttons">
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/register")}>Register</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
