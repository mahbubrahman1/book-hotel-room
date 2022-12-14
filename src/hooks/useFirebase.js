import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import app from '../firebase'

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();

    // handle signin 
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
            })
    }

    // signout or logout 
    const handleSignOut = () => [
        signOut(auth)
            .then(() => {
                setUser({})
            })
    ]

    // show user or change user
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])

    return { user, handleGoogleSignIn, handleSignOut }
}

export default useFirebase;