import { apiCall } from "./apiCall";

const getResourcesUrl = async (resource) => {
   const list = await apiCall(`https://www.swapi.tech/api/${resource}`)
   const { results } = list;
   const urls = results.map(result => result.url);
   return urls;
}

export default getResourcesUrl