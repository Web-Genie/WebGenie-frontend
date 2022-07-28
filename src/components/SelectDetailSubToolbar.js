import PropTypes from "prop-types";
import React, { useContext } from "react";
import styled from "styled-components";

import { InputFieldContext } from "../context/subToolbarContext";

function SelectDetailSubToolbar({ detailValue, className, type }) {
  const { handleInputChange } = useContext(InputFieldContext);

  return (
    <SelectBody type={type}>
      <select className={className} onChange={handleInputChange} type={type}>
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

SelectDetailSubToolbar.propTypes = {
  detailValue: PropTypes.array,
  className: PropTypes.string,
  type: PropTypes.string,
};

const SelectBody = styled.div`
  background: ${(props) => (props.type === "font" ? "white" : null)};
  padding: ${(props) => (props.type === "font" ? "7px 14px" : "7px 2.5px")};
  border: ${(props) => (props.type === "font" ? "1px solid #e5e5e5" : null)};
  border-radius: 6px;

  select {
    width: 80px;
    box-sizing: border-box;
    border-radius: 6px;
    border: #ffffff;
    font-size: 15px;
    font-weight: 400;
    padding: ${(props) => (props.type === "font" ? "1px 5px" : "8px")};
    border: ${(props) => (props.type === "font" ? null : "1px solid #e5e5e5")};
    margin-left: ${(props) => (props.type === "font" ? null : "12px")};
    cursor: pointer;
  }

  option {
    padding: 2px;
    color: #fff;
    font-size: 14px;
    background: #272822;
  }
`;

export default SelectDetailSubToolbar;
