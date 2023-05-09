import React,{useState}from 'react'

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
  
	const handleUsernameChange = (e) => {
	  setUsername(e.target.value);
	};
  
	const handlePasswordChange = (e) => {
	  setPassword(e.target.value);
	};
  
	const handleSubmit = (e) => {
	  e.preventDefault();
	  // Giriş yapma işlemleri
	};
  
	return (
	  <form onSubmit={handleSubmit}>
		<label>
		  Kullanıcı Adı:
		  <input type="text" value={username} onChange={handleUsernameChange} />
		</label>
		<label>
		  Şifre:
		  <input type="password" value={password} onChange={handlePasswordChange} />
		</label>
		<button type="submit">Giriş Yap</button>
		<button type="button">Kayıt Ol</button>
	  </form>
	);
  };

export default Login