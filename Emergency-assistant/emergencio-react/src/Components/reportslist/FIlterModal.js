import React, { useState, useEffect } from "react";
import { Map, Marker } from "google-maps-react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Modal from "@material-ui/core/Modal";
import { getValueByType } from "../utils/utils";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import { FaFilter } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { openErrorSnack } from "../utils/SnackBar";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { useQuery } from "@apollo/react-hooks";
import { BlueSearchButton } from "../styledcomponents/StyledButton";
import { client } from "../../GraphQL/Client";
import { getAllAreas } from "../../GraphQL/Querries";
import LoadingBackdrop from "../../Components/utils/Loading";
import Typography from "@material-ui/core/Typography";
import "./Filter.css";
import { from } from "apollo-boost";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    minWidth: "50vh",
    borderRadius: 15,
    borderColor: "#004654",
    borderStyle: "solid",
    borderWidth: "5px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const FilterModal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [areas, setAreas] = useState([]);
  const history = useHistory();
  const [selectAreas, setSelectAreas] = useState(["هیجکدام"]);
  const [selectedArea, setSelectedArea] = useState("هیجکدام");
  const [selectedLocation, setSelectedLocation] = useState("هیجکدام");
  const { loading, error, data } = useQuery(getAllAreas, { client });
  const { forms } = props;

  const locationsList = forms[0].fields.filter(
    (field) => field.type.toLowerCase() === "location"
  );
  if (error) {
    openErrorSnack();

    history.push("/");
  }
  useEffect(() => {
    if (data) {
      setAreas(data.getAllAreas);
      setSelectAreas(() =>
        data.getAllAreas.map((area) => area.title).concat(["هیچکدام"])
      );
    }
  }, [data]);
  const classes = useStyles();
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const selectArea = (e) => {
    setSelectedArea(e.target.value);
  };
  const selectLocation = (e) => {
    setSelectedLocation(e.target.value);
  };

  const submitFilter = () => {
    handleClose();
    props.setNewFilter({
      location: selectedLocation,
      area: areas.find((area) => area.title === selectedArea),
    });
  };

  return (
    <div>
      <FaFilter className="filter-icon filterBtn" onClick={handleOpen} />

      <Modal
        open={isOpen}
        onClose={handleClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <div className="d-flex flex-row justify-content-around align-items-center">
              <div className=" filter-label">مکان</div>
              <div className="filter-label">منطقه</div>
            </div>
            <div className="d-flex flex-row justify-content-around align-items-center">
              <Select
                disableUnderline
                onChange={selectArea}
                displayEmpty
                className={"m-2 form-control input "}
                value={selectedArea}
              >
                {selectAreas.map((area) => (
                  <MenuItem value={area}>
                    <div>{area}</div>
                  </MenuItem>
                ))}
              </Select>
              <Select
                disableUnderline
                onChange={selectLocation}
                displayEmpty
                className={"m-2 form-control input "}
                value={selectedLocation}
              >
                {locationsList.map((location) => (
                  <MenuItem value={location.title}>
                    <div>{location.title}</div>
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="d-flex mt-4 flex-row justify-content-around align-items-center">
              <BlueSearchButton onClick={submitFilter}> اعمال</BlueSearchButton>
              <BlueSearchButton onClick={props.resetFilter}>
                از نو
              </BlueSearchButton>
            </div>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Modal>
      <LoadingBackdrop open={loading} />
    </div>
  );
};
export default FilterModal;
