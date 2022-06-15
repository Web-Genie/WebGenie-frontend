import { useContext, useEffect, useRef } from "react";

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
      mainpageRef.current.innerHTML = savedCodeCollection[0].code;
    }

    setEditor(null);
  }, [editor]);

  return <div ref={mainpageRef}>{children}</div>;
}

export default DeployedWebsite;
