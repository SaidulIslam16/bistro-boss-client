import { FaPen, FaTrash } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

    const handdleDelete = item => {
        console.log(item);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log(res.data);
                        refetch();
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="w-full px-20">
            <SectionTitle heading='Manage All Items' subHeading='HurryUp'></SectionTitle>
            <div className="overflow-x-auto my-8">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Item Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map((item, index) => <tr key={item._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                <div className="font-bold">{item.name}</div>
                            </td>
                            <td>{item.category}</td>
                            <td>
                                ${item.price}
                            </td>
                            <th>
                                <button className="btn btn-ghost bg-yellow-500 hover:bg-yellow-600 text-white"><FaPen></FaPen></button>
                            </th>
                            <td>
                                <button onClick={() => handdleDelete(item)} className="btn btn-ghost bg-red-600 text-white hover:bg-red-700"><FaTrash /></button>
                            </td>
                        </tr>)}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageItems;