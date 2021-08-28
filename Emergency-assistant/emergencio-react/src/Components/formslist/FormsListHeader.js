import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "../utils/SearchInput";
import "./FormListItem.css";
export default function FormsListHeader(props) {
  return (
    <div className="d-flex  list-item-container list-header-sticky list-header-color">
      <div>شماره‌ی‌ فرم</div>

      <div className="d-flex list-row-item">
        <SearchInput onSearch={props.onSearch} text="نام فرم" />
        {/* <div className="d-flex">نام فرم</div> */}
      </div>
    </div>
  );
}
