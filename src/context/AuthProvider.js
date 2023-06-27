import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [dataForm , setDataForm] =useState({})

  return (
    <AuthContext.Provider value={{ auth, setAuth , dataForm, setDataForm}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
