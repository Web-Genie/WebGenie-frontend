import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../context/userContext";
import api from "../services/api";

const useAxios = (params, idToken, category = null) => {
  const { setFetchedData, setUserInformation, setEditor } =
    useContext(UserContext);
  const navigate = useNavigate();

  const fetchData = async () => {
    if (!idToken) return;
    if (!params) return;

    if (category === "USER") {
      const result = await api(params);

      localStorage.setItem("avatar", result.data.user.image);

      setUserInformation(result.data);
    } else if (category === "EDITOR") {
      const result = await api(params);

      setEditor(result.data);
    } else if (category === "Save") {
      navigate("/creatingnewwebsite");

      const result = await api(params);

      navigate(`/editor/${result.data._id}`);
    } else {
      navigate("/creatingnewwebsite");

      const result = await api(params);

      navigate(`/editor/${result.data.result._id}`);
      setFetchedData(result.data);
      setEditor(result.data);
    }
  };

  return { fetchData };
};

export default useAxios;
