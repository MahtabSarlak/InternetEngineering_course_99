import React, { useState, useEffect } from "react";
import FormListItem from "../formslist/FormListItem";
import ScrollFab from "../formslist/ScrollToTopFab";
import "./ReportsListItem.css";
import { useHistory } from "react-router";
import { getValueByType } from "../utils/utils";
import { useMediaQuery } from "react-responsive";
const ReportsFooter = (props) => {
  const isPortrait = useMediaQuery({ maxAspectRatio: "4/3" });

  const history = useHistory();
  const { records } = props;

  const sums = [];
  for (let i = 0; i < records[0].fields.length; i++) {
    const sumObj = {
      sum: 0,
      title: records[0].fields[i].title,
      type: records[0].fields[i].type,
    };
    if (records[0].fields[i].type.toLowerCase() === "number")
      for (let j = 0; j < records.length; j++) {
        sumObj.sum += parseFloat(
          getValueByType(records[j].fields[i].value, "number")
        );
      }
    sums.push(sumObj);
  }
  return (
    <tr class="list-group-item-info">
      {isPortrait && (
        <td class="countryCardHeader">
          <div class="d-flex flex-row justify-content-center">
            <div>مجموع</div>
          </div>
        </td>
      )}
      {sums.map((field) => {
        return (
          <td className="footerBg">
            <div class="footerCardInfo">
              <div>
                {field.type.toLowerCase() === "number" ? field.sum : "-"}
              </div>
              <div class="propLabel">{field.title}</div>
            </div>
          </td>
        );
      })}
    </tr>
  );
};

export default ReportsFooter;
