import { useCallback, useState } from "react";
import type { HttpMethod } from "../helper/constants";
import { Axios, type AxiosResponse } from "../config/http";


type MutationOptions = {
    url: string;
    method: HttpMethod
    body?: Post | null;
}


export default function useMutation<T>() {

    const [data, setData] = useState<T>();
    const [error, setError] = useState<string>();
    const [loading, setLoading] = useState(false);




    const handleSuccess = async (options: MutationOptions) => {
        const res: AxiosResponse<T> = await Axios[options.method]<T>(options.url, options.body);
        setData(res.data);
    };


    const handleError = (error: unknown) => {
        if (error instanceof Error) setError(error.message);
        alert("something wrong...")
    };

    const runMutation = useCallback((options: MutationOptions) => {
        setLoading(true);
        try {
            handleSuccess(options);
        } catch (e) {
            handleError(e);
        } finally {
            setLoading(false);
        }
    }, []);

    return {data, error, loading, execute: runMutation}




}