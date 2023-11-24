import getResourcesFromUrls from "./getResourcesFromUrls"
import getResourcesUrl from "./getResourcesUrl"

const getResources = async (resource) => {
    const urls = await getResourcesUrl(resource);
    const resources = await getResourcesFromUrls(urls);

    const paresedResources = resources.map(res => {    
        const id = res.result.uid;
        const properties = res.result.properties;
        const type = resource === 'people' ? 'characters' : resource;
        const name = properties.name || properties.model;
        return {id, ...properties, type, name}
    })
    
    return paresedResources;
}

export default getResources;