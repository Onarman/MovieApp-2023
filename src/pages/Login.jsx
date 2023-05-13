import { useContext, useState } from 'react';
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toastErrorNotify, toastSuccessNotify } from '../helpers/Toastify';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const {setCurrentUser} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    const storedUser = sessionStorage.getItem("user");
    const user = {email,password};
    if (storedUser && JSON.parse(storedUser).email === user.email && JSON.parse(storedUser) .password === user.password){
      console.log("Login Successful");
      setCurrentUser(JSON.parse(storedUser));
      navigate("/")
      toastSuccessNotify("Login Successfully!")
    }else{
      console.log("Login Failed");
      toastErrorNotify("Login Failed!!")
    }
    setEmail("")
    setPassword("")
   
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="login-password">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span onClick={handleShowPassword} className="password-icon">
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>
          
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;