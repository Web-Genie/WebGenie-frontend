import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ID_TOKEN } from "../constants/constants";
import { UserContext } from "../context/userContext";
import { firebaseAuth } from "../services/firebase";

const useLogout = () => {
  const { setIsLoggedIn, setFetchedData } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await firebaseAuth.signOut();

      localStorage.removeItem(ID_TOKEN);

      setIsLoggedIn(localStorage.getItem(ID_TOKEN));
      setFetchedData(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return { handleLogout };
};

export default useLogout;
