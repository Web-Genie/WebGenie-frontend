import React from "react";
import styled from "styled-components";

function SelectDetail({ detailData, className = "" }) {
  return (
    <SelectBody>
      <select className={className}>
        {detailData &&
          detailData.map((data) => <option key={data}>{data}</option>)}
      </select>
    </SelectBody>
  );
}

const SelectBody = styled.div`
  select {
    box-sizing: border-box;
    width: 100px;
    padding: 4px;
    font-size: 14px;
    border-radius: 6px;
  }

  option {
    padding: 4px;
    font-size: 14px;
    color: #fff;
    background: #272822;
  }
`;

export default SelectDetail;
