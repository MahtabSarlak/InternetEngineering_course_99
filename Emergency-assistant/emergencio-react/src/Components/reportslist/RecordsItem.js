import React, { useState, useEffect } from "react";
import FormListItem from "../formslist/FormListItem";
import ScrollFab from "../formslist/ScrollToTopFab";
import "./ReportsListItem.css";
import { useHistory } from "react-router";
import { getValueByType } from "../utils/utils";
import { Link } from "react-router-dom";
import { client } from "../../GraphQL/Client";
import { getForms } from "../../GraphQL/Querries";
import { useQuery } from "@apollo/react-hooks";
import { useMediaQuery } from "react-responsive";
const ReportsItem = (props) => {
  const isPortrait = useMediaQuery({ maxAspectRatio: "4/3" });

  const history = useHistory();
  const { fields, index, recordId } = props;
  return (
    <tr
      class="list-group-item-info"
      onClick={() =>
        history.push({
          pathname: "/reports/details/" + recordId,
          state: { filledFields: fields, isFilled: true },
        })
      }
    >
      {isPortrait && (
        <td class="countryCardHeader">
          <div class="d-flex flex-row justify-content-center">
            <div>{index + 1}</div>
          </div>
        </td>
      )}
      {fields.map((field) => {
        return (
          <td>
            <div class="cardInfo">
              <div>{getValueByType(field.value, field.type.toLowerCase())}</div>
              <div class="propLabel">{field.title}</div>
            </div>
          </td>
        );
      })}

      {/* {!isPortrait && (
        <td class="countryCardHeader">
          <div class="d-flex flex-row justify-content-center">
            <div>{form.title}</div>
          </div>
        </td>
      )} */}
    </tr>
  );
};

export default ReportsItem;
