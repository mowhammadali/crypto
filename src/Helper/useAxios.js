import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAxios = url => {
    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get(url);
                setData(response.data);
                setLoading(false);
                setError("");
            }
            catch(err){
                setData([]);
                setLoading(true);
                setError(err.message);
            }
        }
        fetchData();
    } , [url])

    return {data , loading , error};
};