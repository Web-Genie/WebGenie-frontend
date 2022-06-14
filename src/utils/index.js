import React, { useContext, useEffect } from "react";

import { ID_TOKEN } from "../constants/constants";
import { SubToolbarContext } from "../context/subToolbarContext";
import api from "../services/api";

// console.log(localImageSrc);
export const handleDragEnter = (event) => {
  event.preventDefault();
  event.stopPropagation();
};

export const handleDragLeave = (event) => {
  event.preventDefault();
  event.stopPropagation();
};

export const handleDragOver = (event) => {
  event.preventDefault();
  event.stopPropagation();
};

export const handleDrop = (event) => {
  event.preventDefault();
  event.stopPropagation();

  const data = event.dataTransfer.getData("text");
  const node = document.getElementById(data);
  const clonedNode = node.cloneNode(true);
  const parentNode = event.target;
  const parentNodeRect = parentNode.getBoundingClientRect();
  const parentNodeWidth = parentNodeRect.width;
  const parentNodeHeight = parentNodeRect.height;
  const droppedLocationLeft = event.clientX - parentNodeRect.left;
  const droppedLocationTop = event.clientY - parentNodeRect.top;

  clonedNode.draggable = false;
  clonedNode.style.position = "absolute";
  clonedNode.style.left = `${(droppedLocationLeft / parentNodeWidth) * 95}%`;
  clonedNode.style.top = `${(droppedLocationTop / parentNodeHeight) * 95}%`;

  event.target.appendChild(clonedNode);
};

export function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

export function getElementValue(
  targetRef,
  targetProperty = null,
  target = null
) {
  const currentElementWidth = targetRef.getBoundingClientRect().width;
  const currentElementHeight = targetRef.getBoundingClientRect().height;

  if (!target) {
    return [currentElementWidth, currentElementHeight];
  }

  const currentElementValue = Number(
    window
      .getComputedStyle(targetRef, null)
      .getPropertyValue(targetProperty)
      .split("")
      .filter((item) => !isNaN(Number(item)))
      .join("")
  );

  return currentElementValue;
}

export const retrieveURL = () => {
  const currentEditorId = window.location.pathname
    .split("/")
    .filter((item) => item !== "editor")
    .join("");

  return currentEditorId;
};

export const sendUserToHomepage = async () => {
  window.location.replace("/");
};

export const generateEditorDeleteElement = () => {
  const deleteNodeElement = document.createElement("p");

  const deleteCurrentElement = (event) => {
    event.stopPropagation();
    event.target.parentNode.remove();
  };

  deleteNodeElement.style.display = "flex";
  deleteNodeElement.style.justifyContent = "center";
  deleteNodeElement.style.alignItems = "center";
  deleteNodeElement.style.position = "absolute";
  deleteNodeElement.innerHTML = "&#x2715;";
  deleteNodeElement.style.background = "rgba(0,0,0,0.4)";
  deleteNodeElement.style.color = "white";
  deleteNodeElement.style.borderRadius = "50%";
  deleteNodeElement.style.width = "30px";
  deleteNodeElement.style.height = "30px";
  deleteNodeElement.style.fontSize = "23px";
  deleteNodeElement.onclick = deleteCurrentElement;

  return deleteNodeElement;
};
