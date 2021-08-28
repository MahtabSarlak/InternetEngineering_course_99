import React, { useState, useEffect } from "react";
import FormListItem from "../../Components/formslist/FormListItem";
import ScrollFab from "../../Components/formslist/ScrollToTopFab";
import "./FormList.css";
import { client } from "../../GraphQL/Client";
import { getForms } from "../../GraphQL/Querries";
import { useHistory } from "react-router";
import { useQuery } from "@apollo/react-hooks";
import FormsListHeader from "../../Components/formslist/FormsListHeader";
import { openErrorSnack } from "../../Components/utils/SnackBar";
import LoadingBackdrop from "../../Components/utils/Loading";

function FormsList() {
  const [forms, setForms] = useState([]);
  const [keyWord, setKeyWord] = useState("");
  const history = useHistory();
  const { loading, error, data } = useQuery(getForms, { client });
  if (error) {
    openErrorSnack("در گرفتن اطّلاعات فرم مشکلی رخ داد");
    history.push("/");
  }

  useEffect(() => {
    if (data) {
      setForms(data.getAllEmptyForms);
    }
  }, [data]);
  return (
    <div className="fillformlist d-flex flex-column justify-content-center align-items-center">
      <FormsListHeader onSearch={setKeyWord} />
      {forms
        .filter((form) => form.title.toLowerCase().includes(keyWord))
        .map((form) => {
          return <FormListItem form={form} />;
        })}
      <ScrollFab />
      <LoadingBackdrop open={loading} />
    </div>
  );
}

export default FormsList;
