import React, { useState, useEffect } from "react";
import FormListItem from "../../Components/formslist/FormListItem";
import ScrollFab from "../../Components/formslist/ScrollToTopFab";
import "./ReportsList.css";
import { client } from "../../GraphQL/Client";
import { getFilledForms } from "../../GraphQL/Querries";
import { useQuery } from "@apollo/react-hooks";
import { useMediaQuery } from "react-responsive";
import SearchInput from "../../Components/utils/SearchInput";
import ReportsItem from "../../Components/reportslist/ReportsItem";
import ReportsListHeader from "../../Components/reportslist/ReportsListHeader";
import LoadingBackdrop from "../../Components/utils/Loading";
const ReportsList = () => {
  const { loading, error, data } = useQuery(getFilledForms, { client });
  const [reports, setReports] = useState([]);
  useEffect(() => data && makeTableData(), [loading, data]);
  const makeTableData = () => {
    const groupedForms = data.getAllFilledForms.reduce(function (rv, x) {
      (rv[x["formId"]] = rv[x["formId"]] || []).push(x);
      return rv;
    }, {});
    setReports(
      Object.keys(groupedForms).map((key) => {
        return {
          formId: key,
          title: groupedForms[key][0].title,
          filled: groupedForms[key].length,
        };
      })
    );
  };

  const isPortrait = useMediaQuery({ maxAspectRatio: "4/3" });

  const [keyWord, setKeyWord] = useState("");
  return (
    <div className="reportslist d-flex flex-column justify-content-center align-items-center">
      {isPortrait && <SearchInput onSearch={setKeyWord} />}
      <table>
        {!isPortrait && <ReportsListHeader onSearch={setKeyWord} />}
        <tbody>
          {reports
            .filter(
              (form) =>
                form.title.toLowerCase().includes(keyWord) &&
                form.formId !== "null"
            )
            .map((form) => (
              <ReportsItem form={form} />
            ))}
        </tbody>
      </table>
      <ScrollFab />
      <LoadingBackdrop open={loading} />
    </div>
  );
};
export default ReportsList;
