import config from "../../config/env";

const AVAILABLE = "AVAILABLE"

const fetchArticles = () =>
  fetch(`${config.API_ENDPOINT_PRODUCTS}`)
  .then(response => response.json())
  .then( articles => articles.map(article => ({...article, status : AVAILABLE})))
  .catch(error =>  Promise.reject(error) )


export default {
  fetchArticles
};
