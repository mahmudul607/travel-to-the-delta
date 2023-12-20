import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState([]);
    const auth = getAuth(app)

    // const data = {
    //     name: 'Mahmudul',
    //     Roll: 10
    // }
    // Create a user 
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Login User
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    // loading user on state change

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);

        })
        return () =>{
            unSubscribe();
        }
    },[])

    // LogOut user
    const logOutUser = () =>{
        return signOut(auth);
    }

    const authInfo = {
            user,
            createUser,
            loginUser,
            logOutUser
           

    }


    return (
       <AuthContext.Provider value={authInfo}>
        {children}

       </AuthContext.Provider>
    );
};
AuthProvider.propTypes= {
    children: PropTypes.node
}

export default AuthProvider;