import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from 'sweetalert2'

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;


const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL }
                    console.log(newItem);
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log('after post new item', data.data);
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Item Added to Menu',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

        // console.log(data)
    };

    // console.log(errors);
    // console.log(img_hosting_token);

    return (
        <div className="w-full md:px-20">
            <SectionTitle subHeading="What's New" heading='Add an Item'></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name" {...register("name")} className="input input-bordered w-full" />
                </div>
                <div className="flex gap-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Category*</span>
                        </label>
                        <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                            <option>Dessert</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="text" {...register("price", { required: true })} placeholder="Enter Item Price" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Details*</span>
                    </label>
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Enter Details of your Recipe"></textarea>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Item Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <input type="submit" value="Add Item" className="my-5 btn bg-yellow-500 hover:bg-yellow-600" />
            </form>
        </div>
    );
};

export default AddItem;