import { apiCall } from "./apiCall"

const getResourcesFromUrls = async (urls) => {
   const apiCalls =  await Promise.all(urls.map (url=> apiCall(url)));

   return apiCalls;
}

export default getResourcesFromUrls