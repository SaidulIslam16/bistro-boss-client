import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { googleLogin } = useContext(AuthContext);
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = { name: user.displayName, email: user.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(() => {

                        navigate(from, { replace: true });
                    })

            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="divider">OR</div>
            <div className=" mx-8 text-center my-6">
                <button onClick={handleGoogleLogin} className="btn w-full btn-neutral"><FaGoogle /> Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;