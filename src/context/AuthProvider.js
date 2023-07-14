import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [dataForm , setDataForm] =useState({});
  const [dataMining, setDataMining] = useState({});
  const [produits, setProduits] = useState([]);
  const [cotation, setCotation] = useState({});
  const [cotations, setCotations] = useState([])

  return (
    <AuthContext.Provider value={{ auth, setAuth , dataForm, setDataForm , dataMining, setDataMining, produits, setProduits, cotation, setCotation, cotations, setCotations}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
