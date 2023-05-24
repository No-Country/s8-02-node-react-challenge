import axios from 'axios';
import { useState } from 'react';

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const API_URL = import.meta.env.VITE_PUBLIC_API_URL;

    const postData = (url, loginData) => {
        setLoading(true);
        axios.post(`${API_URL}${url}`, loginData)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                setError(err.response.data);
            })
            .finally(() => {
                setLoading(false);
            })
    };

    return { data, loading, error, postData };
};

export default useLogin;