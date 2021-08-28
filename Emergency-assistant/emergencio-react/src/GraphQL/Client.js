import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL + "/graphql",
});

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

let authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export let client = new ApolloClient({
  //   uri: "https://graphql.anilist.co",

  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    dataIdFromObject: (o) => (o._id ? `${o.__typename}:${o._id}` : null),
  }),
  defaultOptions: defaultOptions,
});

export const setToken = (token) => {
  authLink = setContext((_, { headers }) => {
    console.log(token);
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });
  client = new ApolloClient({
    //   uri: "https://graphql.anilist.co",

    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
      dataIdFromObject: (o) => (o._id ? `${o.__typename}:${o._id}` : null),
    }),
    defaultOptions: defaultOptions,
  });
};
