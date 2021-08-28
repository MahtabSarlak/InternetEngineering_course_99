import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

export const BlueLoginButton = withStyles({
  root: {
    backgroundColor: "#004654",
    color: "white",
    boxShadow: "0 3px 5px 2px rgba(255, 255, 255, .1)",
  },
  label: { fontSize: "25px" },
})(Button);

export const BlueSearchButton = withStyles({
  root: {
    backgroundColor: "#004654",
    color: "white",
    boxShadow: "0 3px 5px 2px rgba(255, 255, 255, .1)",
  },
  label: { fontSize: "10px" },
})(Button);

export const LightSearchButton = withStyles({
  root: {
    backgroundColor: "white",
    color: "#808080",
    boxShadow: "0 3px 5px 2px rgba(255, 255, 255, .1)",
  },
  label: { fontSize: "10px" },
})(Button);
