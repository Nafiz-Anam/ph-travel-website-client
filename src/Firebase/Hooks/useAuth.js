import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContexts";

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;
