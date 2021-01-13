import nodeFetch from "node-fetch";

import { DefaultApi, Configuration } from "./star-wars";

// fetch implementation that gets the token from cookie storage
const customFetch = (url: string, options?: RequestInit) => {

  // gather the options
  const fetchOptions = {
    mode: "no-cors",
    ...options,
    headers: {
      ...options?.headers,
      "Content-Type": "application/json"
    },
  };

  // @ts-ignore
  return fetch(url, fetchOptions);
};

// api client
export const starWarsAPI = () => {
  const config = new Configuration({
    fetchApi: customFetch
  });
  return new DefaultApi(config);
};
