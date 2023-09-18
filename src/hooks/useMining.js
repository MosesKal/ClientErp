import { useContext } from "react";
import MiningProvider from "../context/MiningProvider";

const useMining = () => {
  return useContext(MiningProvider);
};
export default useMining;
