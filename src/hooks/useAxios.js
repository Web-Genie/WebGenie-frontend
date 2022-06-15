import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { SubToolbarContext } from "../context/subToolbarContext";
import { UserContext } from "../context/userContext";
import api from "../services/api";
import { saveLocalStorage } from "../utils";

const useAxios = (params, idToken, category = null) => {
  const { setFetchedData, setUserInformation, setEditor, setTitle } =
    useContext(UserContext);
  const { setLocalImageSrc } = useContext(SubToolbarContext);
  const navigate = useNavigate();

  const fetchData = async () => {
    if (!params) return;

    if (!idToken) {
      const result = await api(params);

      setEditor(result.data);
    } else if (category === "USER") {
      const result = await api(params);
      localStorage.setItem("avatar", result.data.user.image);

      setUserInformation(result.data);
    } else if (category === "EDITOR") {
      const result = await api(params);

      setEditor(result.data);
    } else if (category === "Save") {
      localStorage.removeItem("localImgSrc");
      navigate("/creatingnewwebsite");

      const result = await api(params);

      setTitle(result.data.changedTitle);
      setEditor(result.data);
      navigate(`/editor/${result.data.result._id}`);
    } else if (category === "delete") {
      navigate("/creatingnewwebsite");

      const result = await api(params);

      setUserInformation(result.data);
      navigate("/");
    } else if (category === "imageUpload") {
      const location = await api(params);

      saveLocalStorage(location.data.location.split(".com/")[1]);
      setLocalImageSrc(location.data.location);
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

      const result = await api(params);

      navigate(`/editor/${result.data.result._id}`);
      setFetchedData(result.data);
      setEditor(result.data);
    }
  };

  return { fetchData };
};

export default useAxios;
