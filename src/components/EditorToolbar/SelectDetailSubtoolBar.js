import React from "react";
import styled from "styled-components";

function SelectDetailSubtoolBar({ detailValue, className = "" }) {
  return (
    <SelectBody>
      <select className={className}>
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
  select {
    width: 100px;
    padding: 10px 4px 10px;
    box-sizing: border-box;
    border-radius: 6px;
    border: #ffffff;
    font-size: 13px;
    font-weight: 400;
    border: 1px solid #e5e5e5;
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
