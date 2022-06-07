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
    width: 100px;
    padding: 4px;
    box-sizing: border-box;
    border-radius: 6px;
    font-size: 14px;
  }

  option {
    padding: 4px;
    color: #fff;
    font-size: 14px;
    background: #272822;
  }
`;

export default SelectDetail;
