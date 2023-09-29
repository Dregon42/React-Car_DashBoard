import { server_calls } from "../api/server";
import { useEffect, useState } from "react";


export const useGetData = () => {
    const [ carData, setData ] = useState<string[]>([]);

    async function handleDataFetch() {
        const result = await server_calls.get();
        setData(result);
    }

    useEffect( () => {
        handleDataFetch();
    }, []) 


    return { carData, getData:handleDataFetch }
}

