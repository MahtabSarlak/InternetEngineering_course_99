import React, { useState, useEffect } from "react";
import SearchInput from "../utils/SearchInput";
import "./ReportsListItem.css";
const ReportsListHeader = (props) => {
  return (
    <thead>
      <tr>
        <th class="headcolstick">شماره‌ی فرم</th>
        <th class="headcolstick">تعداد گزارشات ثبت شده</th>
        <th class="headcolstick">
          <SearchInput
            onSearch={props.onSearch}
            variant="light"
            text="نام فرم"
          />
        </th>
      </tr>
    </thead>
  );
};
export default ReportsListHeader;
