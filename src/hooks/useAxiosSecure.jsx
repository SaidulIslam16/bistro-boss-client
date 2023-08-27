// useAxiosSecure.js
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for routing
import useAuth from './useAuth';


const useAxiosSecure = () => {
    const navigate = useNavigate(); // Use useNavigate for navigation
    const { logoutUser } = useAuth(); // Import and use your AuthContext

    const axiosSecure = axios.create({
        baseURL: 'https://bistro-boss-server-pi-pied.vercel.app',
    });

    axiosSecure.interceptors.request.use(async (config) => {
        const token = localStorage.getItem('access-token');
        if (token) {
            config.headers.authorization = `Bearer ${token}`;
        }
        return config;
    });

    axiosSecure.interceptors.response.use(
        (response) => response,
        async (error) => {
            if (error.response) {
                if (error.response.status === 401 || error.response.status === 403) {
                    // Log the user out
                    await logoutUser();

                    // Redirect the user to the login page
                    navigate('/login');
                }
                return Promise.reject(error);
            }

        }, [logoutUser, navigate, axiosSecure]
    );

    return [axiosSecure]; // Return the axiosSecure instance
};

export default useAxiosSecure;
