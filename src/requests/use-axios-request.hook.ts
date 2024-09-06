import { useState, useEffect } from "react";
import axios from "axios";
import { UseAxiosRequestType } from "./use-axios-request.interface";

export const useAxiosRequest: UseAxiosRequestType = <Response>(url: string) => {
    const [data, setData] = useState<Response | undefined>();
    useEffect(() => {
        axios
           .get<Response>(url)
           .then((response) => {
                setData(response.data)
            })
           .catch((error) => console.error(error));
    }, [url]);
    
   return data;
}
