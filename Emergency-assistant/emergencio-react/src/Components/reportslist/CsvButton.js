import React from "react";
import { FaFileCsv } from "react-icons/fa";
import { CSVLink } from "react-csv";
import "./CsvButton.css";
const CsvButton = (props) => {
  return (
    <div>
      <CSVLink data={props.data} filename={props.filename + ".csv"}>
        <FaFileCsv className="csv-icon csv" />
      </CSVLink>
    </div>
  );
};

export default CsvButton;
