import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
export let openSuccessSnack = () => {
  console.error("openSuccessSnack isn't set yet!");
};

export let openErrorSnack = () => {
  console.error("openErrorSnack isn't set yet!");
};

export const SnackBar = (props) => {
  const classes = useStyles();
  const [openError, setOpenError] = React.useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [text, setText] = React.useState("");
  const handleSuccess = (successText = " موفّقیّت آمیز بود") => {
    setText(successText);
    setOpenSuccess(true);
  };
  const handleError = (errText = "!اوه اوه اتَّفاق بدی افتاد") => {
    setText(errText);
    setOpenError(true);
  };
  openSuccessSnack = handleSuccess;
  openErrorSnack = handleError;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
    setOpenError(false);
  };
  const vertical = "bottom",
    horizontal = "left";

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={openSuccess}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          {text}
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={openError}
        autoHideDuration={10000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          {text}
        </Alert>
      </Snackbar>
    </div>
  );
};
