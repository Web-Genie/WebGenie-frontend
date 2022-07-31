import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ID_TOKEN } from "../constants/constants";
import { firebaseAuth } from "../services/firebase";
import { Context } from "../store/Store";

const useLogout = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(Context);
  const handleLogout = async () => {
    try {
      await firebaseAuth.signOut();

      localStorage.removeItem(ID_TOKEN);
      localStorage.removeItem("localImgSrc");

      dispatch({
        type: "HANDLE_LOG_IN_TOKEN_INFORMATION",
        payload: null,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return { handleLogout };
};

export default useLogout;
