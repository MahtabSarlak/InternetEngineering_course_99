import React, { useState, useEffect } from "react";
import FormListItem from "../formslist/FormListItem";
import ScrollFab from "../formslist/ScrollToTopFab";
import "./ReportsListItem.css";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { client } from "../../GraphQL/Client";
import { getForms } from "../../GraphQL/Querries";
import { useQuery } from "@apollo/react-hooks";
import { useMediaQuery } from "react-responsive";
const ReportsItem = (props) => {
  const isPortrait = useMediaQuery({ maxAspectRatio: "4/3" });

  const history = useHistory();
  const { form } = props;
  return (
    <tr
      class="list-group-item-info"
      onClick={() => history.push("/reports/" + form.formId)}
    >
      {isPortrait && (
        <td class="countryCardHeader">
          <div class="d-flex flex-row justify-content-center">
            <div>{form.title}</div>
          </div>
        </td>
      )}
      <td>
        <div class="cardInfo">
          <div>{form.formId.substring(0, 5)}</div>
          <div class="propLabel">نام فرم</div>
        </div>
      </td>
      <td>
        <div class="cardInfo">
          <div>{form.filled}</div>
          <div class="propLabel">تعداد گزارشات </div>
        </div>
      </td>

      {!isPortrait && (
        <td class="countryCardHeader">
          <div class="d-flex flex-row justify-content-center">
            <div>{form.title}</div>
          </div>
        </td>
      )}
    </tr>
  );
};
export default ReportsItem;
