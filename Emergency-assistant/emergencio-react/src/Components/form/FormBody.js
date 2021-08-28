import React, { useState, useEffect } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import FormBodyItem from "./FormBodyItem";
import { useHistory } from "react-router";
import { useMutation } from "@apollo/react-hooks";
import { createFilledForm } from "../../GraphQL/Mutations";
import { client } from "../../GraphQL/Client";
import { openSuccessSnack, openErrorSnack, SnackBar } from "../utils/SnackBar";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import "./FormBody.css";
import Axios from "axios";

function FormBody(props) {
  const history = useHistory();
  const fields = props.form.fields ? props.form.fields : [];
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [createForm, { data }] = useMutation(createFilledForm, { client });
  const [initiLocation, setInitiLocation] = useState({
    lat: 35.80209937653889,
    lng: 51.3935485060881,
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setInitiLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => console.log(err)
    );
  }, []);

  const mapOnClick = (index, required) => {
    return (t, map, coord) => {
      if (props.isFilled) return;
      const lat = coord.latLng.lat();
      const lng = coord.latLng.lng();
      let obj = { ...values };
      obj[index] = { lat, lng };
      setValues(obj);
    };
  };
  const updateValue = (index, required) => {
    return (e) => {
      checkforError(index, required)(e);
      const v = e.target ? e.target.value : e;

      let obj = { ...values };
      obj[index] = v;
      setValues(obj);
    };
  };
  const checkforError = (index, required) => {
    return (e) => {
      const v = e.target ? e.target.value : e;
      let errObj = { ...errors };
      errObj[index] = required && (!v || v === "");
      setErrors(errObj);
      return errObj[index];
    };
  };
  const handleSubmit = () => {
    let isOk = true;
    let errObj = { ...errors };
    fields.forEach((key, index) => {
      errObj[index] =
        fields[index].required && (!values[index] || values[index] === "");
      if (!values[index]) values[index] = "";
      isOk = isOk ? !errObj[index] : isOk;
    });
    setErrors(errObj);
    if (isOk) {
      const dataList = Object.keys(values).map((key, index) => {
        return {
          name: fields[key].name,
          title: fields[key].title,
          type: fields[key].type,
          value: JSON.stringify(values[key] ? values[key] : ""),
        };
      });
      const data = {};
      data["title"] = props.form.title;
      data["formId"] = props.form._id;
      data["fields"] = dataList;
      try {
        createForm({ variables: { filledForm: data } });
        openSuccessSnack("فرم با موفّقیّت ثبت شد");
      } catch (error) {
        openErrorSnack();
      }
      history.push("/");
    }
  };
  return (
    <div className="d-flex flex-column  p-5 m-3 form-container">
      {fields.map((field, index) => {
        return (
          <FormBodyItem
            index={index}
            value={values[index]}
            error={errors[index]}
            field={field}
            updateValue={updateValue}
            checkforError={checkforError}
            mapOnClick={mapOnClick}
            initiLocation={initiLocation}
            google={props.google}
            isFilled={props.isFilled}
          />
        );
      })}

      {!props.isFilled && (
        <div className="d-flex justify-content-center">
          <button className="submit-button" onClick={handleSubmit}>
            ثبت
          </button>
        </div>
      )}
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDjs0u02-62FMwrtxMxci5pc6PIubSyW28",
})(FormBody);
