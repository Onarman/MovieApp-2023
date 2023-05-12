import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const {currentUser,setCurrentUser} = useContext(AuthContext)// eğer {currentUser} şeklinde yazmazsak currentUser'ın değerine değil value içindeki currentUser a eşitlenir.bu yüzden currentUser null döner
  const navigate = useNavigate()


  const logout =()=>{
    setCurrentUser(false)
    sessionStorage.removeItem("user");
    navigate("/")
    console.log("loggedout");
  }

  return (
    <div className="container-navbar">
      <Link to={"/"} className='link'>
      <h3>React Movie App</h3>
      </Link>
      {
      currentUser ? (
        <div className="buttons-usern">
          <h5>{currentUser.name}</h5>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div className="buttons">
          <button onClick={()=> navigate("/login")} >Login</button>
          <button onClick={()=>navigate("/register")} >Register</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
