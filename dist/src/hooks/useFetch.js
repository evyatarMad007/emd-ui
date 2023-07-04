import { useState, useEffect } from 'react';
const useFetch = (url, options) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.statusText}`);
                }
                const responseData = await response.json();
                setData(responseData);
                setError(null);
            }
            catch (error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url, options]);
    return { data, loading, error };
};
export default useFetch;
