import React from "react";

function SelectDetail({ detailData, className = "" }) {
  return (
    <select className={className}>
      {detailData &&
        detailData.map((data) => <option key={data}>{data}</option>)}
    </select>
  );
}

export default SelectDetail;
