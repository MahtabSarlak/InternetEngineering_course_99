import React, { useState, useEffect } from "react";
import SearchInput from "../utils/SearchInput";
import "./ReportsListItem.css";
const RecordsHeader = (props) => {
  const { data } = props;
  return (
    <thead>
      <tr>
        {data.map((field) => (
          <th class="headcolstick">{field.title}</th>
        ))}
      </tr>
    </thead>
  );
};
export default RecordsHeader;
