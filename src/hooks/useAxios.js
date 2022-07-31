import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";
import { Context } from "../store/Store";
import { saveLocalStorage } from "../utils";

const useAxios = (params, idToken, category = null) => {
  const navigate = useNavigate();
  const [deployedWebsiteData, setDeployedWebsiteData] = useState(null);
  const { dispatch } = useContext(Context);

  const fetchData = async () => {
    if (!params) return;

    if (!idToken) {
      const response = await api(params);

      setDeployedWebsiteData({ ...response.data.result });
    } else if (category === "USER") {
      const response = await api(params);

      localStorage.setItem("avatar", response.data.user.image);

      dispatch({
        type: "HANDLE_LOG_IN_USER_INFORMATION",
        payload: response.data,
      });
    } else if (category === "EDITOR") {
      const response = await api(params);

      dispatch({ type: "SET_EDITOR_DATA", payload: response.data.result });
    } else if (category === "Save") {
      localStorage.removeItem("localImgSrc");

      navigate("/creatingnewwebsite");

      const response = await api(params);

      dispatch({ type: "SET_EDITOR_DATA", payload: response.data.result });

      navigate(`/editor/${response.data.result._id}`);
    } else if (category === "delete") {
      navigate("/creatingnewwebsite");

      const response = await api(params);

      dispatch({
        type: "HANDLE_LOG_IN_USER_INFORMATION",
        payload: response.data,
      });

      navigate("/");
    } else if (category === "imageUpload") {
      const location = await api(params);

      saveLocalStorage(location.data.location.split(".com/")[1]);

      dispatch({
        type: "SET_LOCAL_IMAGE_SRC",
        payload: location.data.location,
      });
    } else if (category === "RemoveImage") {
      navigate("/creatingnewwebsite");

      await api(params);

      localStorage.removeItem("localImgSrc");

      navigate("/");
    } else if (category === "Publish") {
      navigate("/creatingnewwebsite");

      await api(params);

      window.location.replace("/");
    } else {
      navigate("/creatingnewwebsite");

      const response = await api(params);

      navigate(`/editor/${response.data.result._id}`);
    }
  };

  return { fetchData, deployedWebsiteData };
};

export default useAxios;
