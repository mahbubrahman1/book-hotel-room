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
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();

    // handle signin 
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // signout or logout 
    const handleSignOut = () => {
        setIsLoading(true)

        signOut(auth)
            .then(() => {
                setUser({})
                    .finally(() => setIsLoading(false));
            })
    }

    // show user or change user
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            setIsLoading(false)
        })
    }, [])

    return { user, handleGoogleSignIn, handleSignOut, isLoading }
}

export default useFirebase;