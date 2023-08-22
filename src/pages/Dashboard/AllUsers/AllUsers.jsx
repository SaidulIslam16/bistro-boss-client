import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrash, FaUserShield } from "react-icons/fa";


const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    });

    const handdleDelete = () => {

    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Admin Home</title>
            </Helmet>
            <h3 className="text-3xl font-bold">Total: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role === 'admin' ? 'Adming' : <button className="btn btn-ghost bg-yellow-500 text-white hover:bg-yellow-600"><FaUserShield /></button>}</td>
                            <td><button onClick={() => handdleDelete(user)} className="btn btn-ghost bg-red-600 text-white hover:bg-red-700"><FaTrash /></button></td>
                        </tr>)}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;