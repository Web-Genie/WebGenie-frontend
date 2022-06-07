import React from "react";
import styled from "styled-components";

function SelectDetailSubtoolBar({ detailData, className = "" }) {
  return (
    <SelectBody>
      <select className={className}>
        {detailData &&
          detailData.map((data) => (
            <option key={data} value={data}>
              {data}
            </option>
          ))}
      </select>
    </SelectBody>
  );
}

const SelectBody = styled.div`
  select {
    width: 100px;
    padding: 4px;
    box-sizing: border-box;
    border-radius: 6px;
    border: #ffffff;
    font-size: 13px;
    font-weight: 400;
    border: 1px solid #e5e5e5;
    cursor: pointer;
  }

  option {
    padding: 4px;
    color: #fff;
    font-size: 14px;
    background: #272822;
  }
`;

export default SelectDetailSubtoolBar;
