import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchBlogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/get-blog');
            if (response.data.success) {
                setBlogs(response.data.blogs);
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return { blogs, loading, error, fetchBlogs };
}