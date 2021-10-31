import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import React from "react";
import "./Register.css";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Firebase/Hooks/useAuth";
import { Link } from "react-router-dom";

const Register = () => {
    const { loginUsingGoogle, error, auth, setUser, setError } = useAuth();
    // location information
    const location = useLocation();
    const history = useHistory();
    // redirect url here
    // console.log("Came from ", location.state?.from);
    const redirect_uri = location.state?.from || "/";
    // google login 
    const handleLoginUsingGoogle = () => {
        loginUsingGoogle()
            .then((result) => {
                setUser(result.user);
                history.push(redirect_uri);
            })
            .catch((error) => {
                setError(error);
            });
    };
    // email/password registration
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        // console.log(data);
        // update profile info here
        const updateProfileData = () => {
            updateProfile(auth.currentUser, {
                displayName: data.name,
                photoURL: data.image,
            }).then((res) => {
                console.log(res);
            });
        };
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((result) => {
                // console.log(result);
                setUser(result.user);
                updateProfileData();
                history.push(redirect_uri);
            })
            .catch((error) => {
                setError(error);
            });
    };

    return (
        <div className="register-page">
            <div className="auth-error">
                {error && (
                    <div className="alert alert-danger">
                        <h6>{error}</h6>
                    </div>
                )}
            </div>
            <div className="register-form container">
                <h1>Register Here</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        placeholder="Name"
                        {...register("name", {
                            required: true,
                        })}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        {...register("email", { required: true })}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        {...register("password", { required: true })}
                    />
                    <input
                        type="text"
                        placeholder="Image Link"
                        {...register("image")}
                    />
                    <input
                        className="btn btn-register"
                        type="submit"
                        value="Register"
                    />
                </form>
                <span>
                    Already have an account? <Link to="/login">Login here</Link>
                </span>
            </div>
            <div className="container">
                <h5 className="text-center pt-5">
                    ------------ or ------------
                </h5>
                <div className="social-login-area">
                    <h1>Continue with Social Login</h1>
                    <button
                        className="btn-google shadow"
                        onClick={handleLoginUsingGoogle}
                    >
                        <img
                            src="https://i.ibb.co/DrxpwZZ/google.png"
                            alt="google logo"
                        />
                        Continue with Google
                    </button>
                    <button
                        className=" btn-github  shadow"
                        onClick={handleLoginUsingGoogle}
                    >
                        <img
                            src="https://i.ibb.co/G9646vx/git.png"
                            alt="github logo"
                        />
                        Continue with Github
                    </button>
                    <button
                        className=" btn-facebook  shadow"
                        onClick={handleLoginUsingGoogle}
                    >
                        <img
                            src="https://i.ibb.co/y0F9JDD/fb.png"
                            alt="fb logo"
                        />
                        Continue with Facebook
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
