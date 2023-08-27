import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
    const { user } = useAuth();
    return (
        <div className="w-full px-20">
            <h2 className="text-4xl">Welcome Home: <span className="font-bold">{user.displayName}</span></h2>
        </div>
    );
};

export default UserHome;