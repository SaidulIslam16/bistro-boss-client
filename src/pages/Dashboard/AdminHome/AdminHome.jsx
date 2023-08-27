import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaCartArrowDown, FaUsers, FaWallet } from "react-icons/fa";

const AdminHome = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats');
            return res.data;
        }
    });
    return (
        <div className="w-full px-20">
            <h2 className="text-4xl my-6">Welcome Home: <span className="font-bold">{user.displayName}</span></h2>
            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-title">Revenue</div>
                    <div className=" flex justify-between items-center">
                        <div className="text-2xl mr-3 text-blue-600"><FaWallet /></div>
                        <div className="stat-value ">${stats.revenue}</div>
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-title">Users</div>
                    <div className=" flex justify-between items-center">
                        <div className="text-2xl mr-3 text-violet-600"><FaUsers /></div>
                        <div className="stat-value ">{stats.users}</div>
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-title">Products</div>
                    <div className=" flex justify-between items-center">
                        <div className="text-2xl mr-3 text-red-600"><FaUsers /></div>
                        <div className="stat-value ">{stats.products}</div>
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-title">Prders</div>
                    <div className=" flex justify-between items-center">
                        <div className="text-2xl mr-3 text-green-600"><FaCartArrowDown /></div>
                        <div className="stat-value ">{stats.orders}</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminHome;