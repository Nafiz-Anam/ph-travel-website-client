import React from "react";
import "./Login.css";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Firebase/Hooks/useAuth";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { Link } from "react-router-dom";

const Login = () => {
    // importing login methods here
    const { loginUsingGoogle, error, setUser, setError, auth, setIsLoading } = useAuth();
    // location information
    const location = useLocation();
    const history = useHistory();
    // redirect url here
    // console.log("Came from ", location.state?.from);
    const redirect_uri = location.state?.from || "/";
    const handleLoginUsingGoogle = () => {
        loginUsingGoogle()
            .then((result) => {
                setUser(result.user);
                history.push(redirect_uri);
            })
            .catch((error) => {
                setError(error);
            }).finally(()=> setIsLoading(false))
    };
    // email/password login
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        // console.log(data);
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((result) => {
                // console.log(result);
                setUser(result.user);
                history.push(redirect_uri);
            })
            .catch((error) => {
                setError(error);
            });
    };
    return (
        <div className="login-page">
            <div className="auth-error">
                {error && (
                    <div className="alert alert-danger">
                        <h6>{error}</h6>
                    </div>
                )}
            </div>
            <div className="container">
                <h1 className="text-center login-title">Login Here</h1>
                <div className="login-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="email"
                            placeholder="Email"
                            {...register("email")}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            {...register("password")}
                        />
                        <input
                            className="btn login-btn"
                            type="submit"
                            value="Log In"
                        />
                    </form>
                    <span>
                        Don't have an account?{" "}
                        <Link to="/register">Create an account</Link>
                    </span>
                </div>
                <h5 className="text-center pt-5">
                    ------------ or ------------
                </h5>
                <div className="social-login-area">
                    <h1>Continue with Social Login</h1>
                    <button
                        className="btn-google shadow"
                        onClick={handleLoginUsingGoogle}
                    >
                        <img src="https://i.ibb.co/DrxpwZZ/google.png" alt="" />
                        Continue with Google
                    </button>
                    <button
                        className=" btn-github  shadow"
                        onClick={handleLoginUsingGoogle}
                    >
                        <img src="https://i.ibb.co/G9646vx/git.png" alt="" />
                        Continue with Github
                    </button>
                    <button
                        className=" btn-facebook  shadow"
                        onClick={handleLoginUsingGoogle}
                    >
                        <img src="https://i.ibb.co/y0F9JDD/fb.png" alt="" />
                        Continue with Facebook
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
