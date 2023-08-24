import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";


const AdminRoute = ({ children }) => {
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin();
    const { user, loading } = useAuth();

    if (loading || isAdminLoading) {
        return <p>Loading....</p>
    }
    if (user && isAdmin) {
        return children;
    }
    else {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
};

export default AdminRoute;