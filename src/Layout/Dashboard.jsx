import { Helmet } from "react-helmet-async";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaList, FaEnvelope, FaUtensilSpoon, FaBook, FaUsers } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {

    const [cart] = useCart();

    // TODO: load data from the server to have dynamic user check isAdmin=true or false;
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (

        <div className="drawer lg:drawer-open">
            <Helmet>
                <title>Bistro Boss | DashBoard</title>
            </Helmet>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            <li><Link to='/dashboard/home'><FaHome /> Admin Home</Link></li>
                            <li><Link to='/dashboard/additem'> <FaUtensilSpoon /> Add Item</Link></li>
                            <li><Link to='/dashboard/manageitems'><FaList /> Manage Items</Link></li>
                            <li><Link to='/dashboard/mycart'><FaBook /> Manage Bookings </Link></li>
                            <li><Link to='/dashboard/allusers'><FaUsers /> All Users </Link></li>
                        </> : <>
                            <li><Link to='/dashboard/home'><FaHome /> User Home</Link></li>
                            <li><Link to='/dashboard/mycart'><FaShoppingCart /> My Cart <span className="badge badge-secondary">+{cart?.length || 0}</span></Link></li>
                            <li><Link to='/dashboard/history'><FaWallet /> Payment History</Link></li>
                            <li><Link to='/dashboard/reservation'><FaCalendarAlt /> Reservation</Link></li>
                        </>
                    }
                    <div className="divider"></div>
                    <li><Link to='/'><FaHome /> Home</Link></li>
                    <li><Link to='/menu'><FaList /> Menu</Link></li>
                    <li><Link to='/order/salad'><FaShoppingCart /> Order</Link></li>
                    <li><Link to='/'><FaEnvelope /> Contact</Link></li>

                </ul>

            </div>

        </div>
    );
};

export default Dashboard;