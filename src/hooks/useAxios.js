import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { SubToolbarContext } from "../context/subToolbarContext";
import { UserContext } from "../context/userContext";
import api from "../services/api";

const useAxios = (params, idToken, category = null) => {
  const { setFetchedData, setUserInformation, setEditor, setTitle } =
    useContext(UserContext);
  const { setLocalImageSrc } = useContext(SubToolbarContext);
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
      navigate("/creatingnewwebsite");

      const location = await api(params);
      setLocalImageSrc(location.data.location);
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
