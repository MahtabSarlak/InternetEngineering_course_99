import React, { useState } from "react";
import { Map, Marker } from "google-maps-react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Modal from "@material-ui/core/Modal";
import { getValueByType } from "../utils/utils";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import "./FormBody.css";

const SelectComponent = (props) => {
  return props.disabled ? (
    <TextComponent {...props} checkforError={() => {}} />
  ) : (
    <Select
      disableUnderline
      onChange={props.updateValue(props.index, props.field.required)}
      displayEmpty
      className={"form-control input " + (props.error ? "is-invalid" : "")}
      value={props.disabled ? props.field.value : props.value}
      disabled={props.disabled}
    >
      {props.field.options.map((option) => (
        <MenuItem value={option.value}>{option.label}</MenuItem>
      ))}
    </Select>
  );
};

const TextComponent = (props) => {
  const { value, required, index, type } = props.field;
  return (
    <input
      type="text"
      dir="rtl"
      className={"form-control input " + (props.error ? "is-invalid" : "")}
      id={props.field.name}
      onChange={props.updateValue(props.index, required)}
      onFocus={props.checkforError(props.index, required)}
      value={props.disabled ? getValueByType(value, type) : props.value}
      disabled={props.disabled}
    />
  );
};
const NumberComponent = (props) => {
  return props.disabled ? (
    <TextComponent {...props} checkforError={() => {}} />
  ) : (
    <input
      type="number"
      dir="rtl"
      className={"form-control input " + (props.error ? "is-invalid" : "")}
      id={props.field.name}
      onChange={props.updateValue(props.index, props.field.required)}
      onFocus={props.checkforError(props.index, props.field.required)}
      value={props.disabled ? props.field.value : null}
      disabled={props.disabled}
    />
  );
};
const DateComponent = (props) => {
  return props.disabled ? (
    <TextComponent {...props} checkforError={() => {}} />
  ) : (
    <DatePicker
      locale="fa"
      calendarPopperPosition="bottom"
      colorPrimary="#004654"
      value={props.value}
      shouldHighlightWeekends
      inputPlaceholder="روی تقویم انتخاب کنید"
      inputClassName={"form-control input " + (props.error ? "is-invalid" : "")}
      onChange={props.updateValue(props.index, props.field.required)}
    />
  );
};

const MapModalComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      {!isOpen && (
        <button
          onClick={handleOpen}
          className={
            "input map-button form-control " + (props.error ? "is-invalid" : "")
          }
        >
          {props.disabled
            ? "مشاهده روی نقشه"
            : props.value
            ? "تغییر انتخاب"
            : "روی نقشه انتخاب کنید"}
        </button>
      )}
      <Modal
        open={isOpen}
        onClose={handleClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <GoogleMapComponent
          google={props.google}
          index={props.index}
          initiLocation={props.initiLocation}
          value={props.value}
          mapOnClick={props.mapOnClick}
        />
      </Modal>
    </div>
  );
};
const GoogleMapComponent = (props) => {
  return (
    <Map
      google={props.google}
      zoom={15}
      containerStyle={{
        width: "80%",
        height: "60%",
      }}
      initialCenter={props.value ? props.value : props.initiLocation}
      key={props.index}
      onClick={props.mapOnClick(props.index)}
      className="map"
    >
      {props.value && <Marker key={props.index} position={props.value} />}
    </Map>
  );
};

function FormBodyItem(props) {
  const {
    value,
    error,
    index,
    field,
    updateValue,
    checkforError,
    mapOnClick,
    google,
    isFilled,
  } = props;
  const getInputOfType = () => {
    if (field.options && field.options.length > 0)
      return (
        <SelectComponent
          index={index}
          error={error}
          field={field}
          value={value}
          disabled={isFilled}
          updateValue={updateValue}
        />
      );
    else if (field.type.toLowerCase() === "text")
      return (
        <TextComponent
          index={index}
          error={error}
          field={field}
          value={value}
          updateValue={updateValue}
          disabled={isFilled}
          checkforError={checkforError}
        />
      );
    else if (field.type.toLowerCase() === "number")
      return (
        <NumberComponent
          index={index}
          error={error}
          field={field}
          updateValue={updateValue}
          disabled={isFilled}
          checkforError={checkforError}
        />
      );
    else if (field.type.toLowerCase() === "date")
      return (
        <DateComponent
          index={index}
          error={error}
          field={field}
          updateValue={updateValue}
          disabled={isFilled}
          value={value}
        />
      );
    else if (field.type.toLowerCase() === "location")
      return (
        <MapModalComponent
          index={index}
          error={error}
          field={field}
          updateValue={updateValue}
          value={isFilled ? JSON.parse(field.value) : value}
          mapOnClick={mapOnClick}
          disabled={isFilled}
          google={google}
        />
      );
  };

  return (
    <div>
      <div>
        <div className="d-flex flex-column ">
          <label for={field.name}>:{field.title}</label>
          {getInputOfType(field, index)}
        </div>
      </div>
      <div className="error-message">
        {error ? "لطفاً مقدار بالا را پر کنید" : ""}
      </div>
    </div>
  );
}

export default FormBodyItem;
