import { useContext, useEffect } from "react";

import { UserContext } from "../context/userContext";
import api from "../services/api";

const useAxios = (params, idToken) => {
  const { userInformation, isLoggedIn, setUserInformation } =
    useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      if (userInformation) return;
      if (!idToken) return;

      const result = await api(params);

      setUserInformation(result.data);
    };

    fetchData();
  }, [isLoggedIn]);

  return { userInformation };
};

export default useAxios;
