import { DefaultApi, Configuration } from "./star-wars";

// api client
export const starWarsAPI = () => {
  const config = new Configuration({
    fetchApi: fetch,
  });

  return new DefaultApi(config);
};
