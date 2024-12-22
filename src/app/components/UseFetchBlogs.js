import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export default function useFetchBlogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const fetchBlogs = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:3000/api/get-blog');
            if (response.data.success) {
                setBlogs(response.data.blogs);
                setError(null);
            } else {
                setError(response.data.message);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

   

    return { blogs, loading, error, fetchBlogs, setBlogs };
}