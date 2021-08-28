import React, { useState, useEffect } from "react";
import Popover from "@material-ui/core/Popover";
import { MdSearch } from "react-icons/md";
import "./utils.css";
import {
  BlueSearchButton,
  LightSearchButton,
} from "../styledcomponents/StyledButton";

const SearchInput = (props) => {
  const [keyWord, setKeyWord] = useState("");
  const { onSearch, variant = "main", text = "جست و جو" } = props;
  const setQuery = (event) => {
    const newValue = event.target.value.toLowerCase();
    onSearch(newValue);
    setKeyWord(newValue);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="search-container d-flex flex-column justify-content-center align-items-center">
      {variant === "main" && (
        <BlueSearchButton onClick={handleClick}>
          <MdSearch className="search-icon" />
          <div className="search-text">{text}</div>
        </BlueSearchButton>
      )}
      {variant === "light" && (
        <LightSearchButton onClick={handleClick}>
          <MdSearch className="search-icon" />
          <div className="search-text">{text}</div>
        </LightSearchButton>
      )}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <input
          type="text"
          dir="rtl"
          placeholder="جست و جو"
          defaultValue={keyWord !== "" ? keyWord : null}
          className={"form-control"}
          onChange={setQuery}
        />
      </Popover>
    </div>
  );
};

export default SearchInput;
