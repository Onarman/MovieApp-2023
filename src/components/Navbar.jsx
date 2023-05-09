import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const currentUser = "asd"

  const logout =()=>{
    console.log("logout");
  }
  let userName = "Ömer";
  return (
    <div className="container-navbar">
      <Link to={"/"} className='link'>
      <h3>React Movie App</h3>
      </Link>
      {
      currentUser ? (
        <div className="buttons-usern">
          <h5>{userName}</h5>
          <button onClick={()=>logout}>Logout</button>
        </div>
      ) : (
        <div className="buttons">
          <button >Login</button>
          <button >Register</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
