import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    setCurrentUser(JSON.parse(sessionStorage.getItem("user")));
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser,setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
