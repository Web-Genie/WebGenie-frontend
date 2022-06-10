import { useContext } from "react";

import { UserContext } from "../context/userContext";
import { firebaseAuth } from "../services/firebase";

const useLogout = () => {
  const { setIsLoggedIn, setUserInformation } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      await firebaseAuth.signOut();

      localStorage.removeItem("idToken");

      setIsLoggedIn(localStorage.getItem("idToken"));
      setUserInformation(null);
    } catch (error) {
      console.log(error);
    }
  };

  return { handleLogout };
};

export default useLogout;
