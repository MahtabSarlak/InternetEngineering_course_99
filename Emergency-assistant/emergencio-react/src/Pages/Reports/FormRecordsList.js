import React, { useState, useEffect } from "react";
import FormListItem from "../../Components/formslist/FormListItem";
import ScrollFab from "../../Components/formslist/ScrollToTopFab";
import "./ReportsList.css";
import { client } from "../../GraphQL/Client";
import { getForms } from "../../GraphQL/Querries";
import { useParams, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { useMediaQuery } from "react-responsive";
import { getFilledFormsWithFields } from "../../GraphQL/Querries";
import SearchInput from "../../Components/utils/SearchInput";
import { openErrorSnack } from "../../Components/utils/SnackBar";
import RecordsItem from "../../Components/reportslist/RecordsItem";
import RecordsHeader from "../../Components/reportslist/RecordsHeader";
import CsvButton from "../../Components/reportslist/CsvButton";
import FilterModal from "../../Components/reportslist/FIlterModal";
import * as turf from "@turf/turf";
import LoadingBackdrop from "../../Components/utils/Loading";
import ReportsFooter from "../../Components/reportslist/RecordsListFooter";
const FormsRecordsList = () => {
  //   const [forms, setForms] = useState([]);
  const { formId } = useParams();
  const [forms, setForms] = useState([]);
  const [finishedGetting, setFinishedGetting] = useState(false);
  const [filter, setFilter] = useState({});
  const history = useHistory();
  const { loading, error, data } = useQuery(getFilledFormsWithFields, {
    client,
  });
  if (error) {
    openErrorSnack("در گرفتن اطّلاعات فرم مشکلی رخ داد");
    history.push("/");
  }
  useEffect(() => data && setFormsWithId(), [data, loading]);

  const setFormsWithId = () => {
    setForms(
      data.getAllFilledForms.filter((item) => item.formId === formId),
      () => setFinishedGetting(true)
    );
  };

  const setNewFilter = (filters) => {
    setFilter(filters);
  };
  const unsetFilter = () => {
    setFilter({});
  };
  const isPortrait = useMediaQuery({ maxAspectRatio: "4/3" });
  const csvData = getCsvData(forms);
  if (forms.length > 0)
    return (
      <div className="reportslist d-flex flex-column justify-content-center align-items-center">
        <FilterModal
          forms={forms}
          setNewFilter={setNewFilter}
          resetFilter={unsetFilter}
        />
        <table>
          {!isPortrait && <RecordsHeader data={forms[0].fields} />}
          <tbody>
            {forms
              .filter((form) => {
                if (filter.area && filter.location) {
                  const obj = form.fields.filter((field) => {
                    if (
                      field.type.toLowerCase() !== "location" ||
                      field.title !== filter.location
                    )
                      return false;
                    const valueObj = JSON.parse(field.value);

                    try {
                      const pt = turf.point([
                        parseFloat(valueObj.lng),
                        parseFloat(valueObj.lat),
                      ]);
                      const poly = turf.polygon(
                        filter.area.geoLocation.geometry.coordinates
                      );
                      return turf.booleanPointInPolygon(pt, poly);
                    } catch (error) {
                      return false;
                    }
                  });
                  return obj.length > 0;
                }
                return true;
              })
              .map((form, index) => (
                <RecordsItem
                  fields={form.fields}
                  index={index}
                  recordId={form._id}
                />
              ))}
            <ReportsFooter records={forms} />
          </tbody>
        </table>
        <CsvButton
          data={csvData}
          filename={"Form-" + forms[0].formId + "-Reports"}
        />
        <ScrollFab />
      </div>
    );
  else {
    if ((!loading && finishedGetting) || !formId || formId === "null")
      history.push("/404");
    return <LoadingBackdrop open={loading} />;
  }
};

const getCsvData = (data) => {
  if (data.length === 0) return;
  const csvHeaders = data[0].fields.map((field) => field.title);
  const csvRows = data.map((form) => form.fields.map((field) => field.value));
  return [csvHeaders].concat(csvRows);
};

export default FormsRecordsList;
