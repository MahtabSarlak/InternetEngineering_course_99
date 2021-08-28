import { setToken } from "../GraphQL/Client";

export const getTokenAndSetRole = (getToken, setRole) => () => {
  getToken({
    audience: process.env.REACT_APP_AUDIENCE,
  })
    .then((res) => {
      setToken(res);
    })
    .catch((err) => {});
};
