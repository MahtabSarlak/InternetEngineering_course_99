import React from "react";
import { Link } from "react-router-dom";
import "./FormListItem.css";
export default function FormListItem(props) {
  return (
    <Link
      className="d-flex list-item-container list-item-color"
      to={"/fill-forms/" + props.form._id}
    >
      <div>{props.form._id.substring(0, 5)}</div>
      <div>{props.form.title}</div>
    </Link>
  );
}
