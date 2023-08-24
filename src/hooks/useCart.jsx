import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCart = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        // queryFn: async () => {
        //     const response = await fetch(`http://localhost:5000/cart?email=${user?.email}`, {
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return response.json();
        // },
        queryFn: async () => {
            const response = await axiosSecure(`/cart?email=${user?.email}`)
            // console.log('res from axios', response)
            return response.data;
        },
    })

    return [cart, refetch]
};

export default useCart;