import { useContext, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const SignUP = () => {

    const { createUser, userProfileUpdate } = useContext(AuthContext);
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                userProfileUpdate(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = { name: data.name, email: data.email }
                        fetch('https://bistro-boss-server-pi-pied.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(userInfo)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'User Created Successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                navigate('/');
                            })


                    })
                    .catch(error => console.log(error))

            })
            .catch(error => console.log(error))
    };


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        // console.log(user_captcha_value)

        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false)
        }

        else {
            setDisabled(true)
        }
    }

    return (
        <>
            <Helmet>
                <title>Bistro-Boss | SignUP</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content md:flex">
                    <div className="text-center md:w1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card w-full md:w-2/3 shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Enter Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-500'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Enter Photo Url" className="input input-bordered" />
                                {errors.photoURL && <span className='text-red-500'>Photo Url is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="Enter Email" className="input input-bordered" />
                                {errors.email && <span className='text-red-500'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} name="password" placeholder="Enter Password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-500'>Password is Required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-500'>Password Must be 6 Charecters</p>}
                                {errors.password?.type === 'maxLength' && <p className='text-red-500'>Password Can't be More than 20 Charecters</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} ref={captchaRef} type="text" name="captcha" placeholder="Enter Captcha Here" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={false} className="btn btn-primary" type="submit" value="Signup" />
                            </div>
                        </form>
                        <div className='text-center pb-5'>
                            Already have an Account? <span className='text-yellow-500 font-bold'><Link to='/login'>Login</Link></span>
                        </div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUP;