import { createContext, useState } from "react";

const MiningContext = createContext({});

export const MiningProvider = ({ children }) => {
  const [data, setData] = useState("bonjour le big dev");

  return (
    <MiningContext.Provider value={{ data, setData}}>
      {children}
    </MiningContext.Provider>
  );
};

export default MiningContext;