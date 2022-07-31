import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AXIOS_REQUEST_CATEGORY } from "../constants/constants";
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
    } else if (category === AXIOS_REQUEST_CATEGORY.GET_USER_DATA) {
      const response = await api(params);

      localStorage.setItem("avatar", response.data.user.image);

      dispatch({
        type: "HANDLE_LOG_IN_USER_INFORMATION",
        payload: response.data,
      });
    } else if (category === AXIOS_REQUEST_CATEGORY.GET_EDITOR_DATA) {
      const response = await api(params);

      dispatch({ type: "SET_EDITOR_DATA", payload: response.data.result });
    } else if (category === AXIOS_REQUEST_CATEGORY.SAVE_EDITOR_CODE) {
      localStorage.removeItem("localImgSrc");

      navigate("/creatingnewwebsite");

      const response = await api(params);

      dispatch({ type: "SET_EDITOR_DATA", payload: response.data.result });

      navigate(`/editor/${response.data.result._id}`);
    } else if (category === AXIOS_REQUEST_CATEGORY.DELETE_WEBSITE) {
      navigate("/creatingnewwebsite");

      const response = await api(params);

      dispatch({
        type: "HANDLE_LOG_IN_USER_INFORMATION",
        payload: response.data,
      });

      navigate("/");
    } else if (category === AXIOS_REQUEST_CATEGORY.UPLOAD_IMAGE) {
      const location = await api(params);

      saveLocalStorage(location.data.location.split(".com/")[1]);

      dispatch({
        type: "SET_LOCAL_IMAGE_SRC",
        payload: location.data.location,
      });
    } else if (category === AXIOS_REQUEST_CATEGORY.REMOVE_IMAGE) {
      navigate("/creatingnewwebsite");

      await api(params);

      localStorage.removeItem("localImgSrc");

      navigate("/");
    } else if (category === AXIOS_REQUEST_CATEGORY.PUBLISH_WEBSITE) {
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
