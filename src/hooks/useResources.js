import { useState, useEffect } from "react";

import getResources from "../utils/getResources";

const useResources = (target) => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedResources = await getResources(target)
            setResources(fetchedResources)
        }
        fetchData()

    }, [])
    return resources;
}

export default useResources;