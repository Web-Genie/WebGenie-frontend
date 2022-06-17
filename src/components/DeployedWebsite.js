import { useContext, useEffect, useRef } from "react";
import { MdAgriculture } from "react-icons/md";

import { UserContext } from "../context/userContext";
import useAxios from "../hooks/useAxios";

function DeployedWebsite({ children }) {
  const { editor, setEditor } = useContext(UserContext);
  const mainpageRef = useRef(null);
  const deployedEditorURL = window.location.pathname.split("/")[2];
  const { fetchData } = useAxios({
    method: "get",
    url: `/websites/${deployedEditorURL}/deploy`,
    headers: {
      params: deployedEditorURL,
    },
  });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (editor) {
      const savedCodeCollection = editor.result.userSavedCode;
      mainpageRef.current.style.width = "100%";
      mainpageRef.current.style.height = "100vh";
      mainpageRef.current.style.backgroundColor =
        savedCodeCollection[0].backgroundColor;
      mainpageRef.current.innerHTML = savedCodeCollection[0].code;
    }

    setEditor(null);
  }, [editor]);

  return <div ref={mainpageRef}>{children}</div>;
}

export default DeployedWebsite;
