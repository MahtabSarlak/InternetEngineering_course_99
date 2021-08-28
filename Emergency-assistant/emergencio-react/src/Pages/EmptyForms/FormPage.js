import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormBody from "../../Components/form/FormBody";
import "./FormPage.css";
import "./FormList.css";
import { client } from "../../GraphQL/Client";
import LoadingBackdrop from "../../Components/utils/Loading";
import { getFormById, getFilledFormById } from "../../GraphQL/Querries";
import { useHistory } from "react-router";
import { useQuery } from "@apollo/react-hooks";
import { openErrorSnack } from "../../Components/utils/SnackBar";

export default function FormPage(props) {
  let isFilled = false;
  const history = useHistory();
  if (props.location.pathname.includes("/reports/details/")) {
    isFilled = true;
  }

  const { formId } = useParams();
  const [form, setForm] = useState([]);

  const { loading, error, data } = useQuery(
    isFilled ? getFilledFormById : getFormById,
    {
      client,
      variables: { id: formId },
    }
  );
  if (error) {
    openErrorSnack("در گرفتن اطّلاعات فرم مشکلی رخ داد");
    history.push("/");
  }
  useEffect(() => {
    data && setForm(isFilled ? data.getFilledFormById : data.getFormById);
  }, [loading, data]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center form-card-container">
      <div className="d-flex flex-column m-3 p-3 justify-content-center align-items-center form-card-back">
        <div style={{ width: "100%" }}>
          <FormBody isFilled={isFilled} form={form} />
        </div>
      </div>
      <LoadingBackdrop open={loading} />
    </div>
  );
}
