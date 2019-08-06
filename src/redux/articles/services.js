import config from "../../config/env";

const fetchArticles = () =>
  fetch(`${config.API_ENDPOINT_PRODUCTS}`).then(response =>
    response.ok ? response.json() : Promise.reject(response)
  );

export default {
  fetchArticles
};
