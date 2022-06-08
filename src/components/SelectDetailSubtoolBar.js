import React from "react";
import styled from "styled-components";

function SelectDetailSubtoolBar({ detailValue, className, handleImgOpacity }) {
  return (
    <SelectBody className={className}>
      <select className={className} onChange={handleImgOpacity}>
        {detailValue &&
          detailValue.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
      </select>
    </SelectBody>
  );
}

const SelectBody = styled.div`
  background: ${(props) => (props.className === "font" ? "white" : null)};
  padding: 7px 2.5px;
  border: ${(props) =>
    props.className === "font" ? "1px solid #e5e5e5" : null};
  border-radius: 6px;

  select {
    width: 80px;
    box-sizing: border-box;
    border-radius: 6px;
    border: #ffffff;
    font-size: 15px;
    font-weight: 400;
    padding: ${(props) => (props.className === "font" ? "1px" : "8px")};
    border: ${(props) =>
    props.className === "font" ? null : "1px solid #e5e5e5"};
    margin-left: ${(props) => (props.className === "font" ? null : "12px")};
    cursor: pointer;
  }

  option {
    padding: 2px;
    color: #fff;
    font-size: 14px;
    background: #272822;
  }
`;

export default SelectDetailSubtoolBar;
