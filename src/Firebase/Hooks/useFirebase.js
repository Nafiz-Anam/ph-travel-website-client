import { useEffect, useState } from "react";
import initializeAuth from "../Auth/firebase.init";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

//initializing firebase here
initializeAuth();

const useFirebase = () => {
    // states we need
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [saveDetails, setSaveDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // auth for firebase
    const auth = getAuth();

    // providers for different login methods
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // login functions here
    //google login
    const loginUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // github login 
    const logInWithGithub = () => {
        setIsLoading(true);
        return signInWithPopup(auth, githubProvider)
            
    };

    //observer function here
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    // log out function here
    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser("");
            })
            .finally(() => setIsLoading(false));
    };
    // all my return value here
    return {
        loginUsingGoogle,
        user,
        logout,
        error,
        setUser,
        auth,
        setError,
        setSaveDetails,
        saveDetails,
        isLoading,
        setIsLoading,
        logInWithGithub,
    };
};

export default useFirebase;
