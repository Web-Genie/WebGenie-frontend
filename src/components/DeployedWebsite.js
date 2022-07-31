import DOMPurify from "dompurify";
import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";

import useAxios from "../hooks/useAxios";

function DeployedWebsite({ children }) {
  const mainpageRef = useRef(null);
  const deployedEditorURL = window.location.pathname.split("/")[2];

  const { fetchData, deployedWebsiteData } = useAxios({
    method: "get",
    url: `/websites/${deployedEditorURL}/deploy`,
    headers: {
      params: deployedEditorURL,
    },
  });

  useEffect(() => {
    if (!deployedWebsiteData) {
      fetchData();

      return;
    }

    const savedCodeCollection = deployedWebsiteData.userSavedCode;
    const sanitizedCode = DOMPurify.sanitize(savedCodeCollection[0].code);

    mainpageRef.current.style.width = "100%";
    mainpageRef.current.style.height = "100vh";
    mainpageRef.current.style.backgroundColor =
      savedCodeCollection[0].backgroundColor;
    mainpageRef.current.innerHTML = sanitizedCode;
  }, [deployedWebsiteData]);

  return <div ref={mainpageRef}>{children}</div>;
}

DeployedWebsite.propTypes = {
  children: PropTypes.array,
};

export default DeployedWebsite;
