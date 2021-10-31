import React, { createContext } from "react";
import useFirebase from "../Hooks/useFirebase";
//creating a context api here
export const AuthContext = createContext();

const AuthContexts = ({ children }) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContexts;
