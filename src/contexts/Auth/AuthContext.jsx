import auth from "@/firebase_auth/firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
export default AuthContext;

export const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = async () => {
    return await signInWithPopup(auth, googleProvider);
  };

  const updateUser = (name, image) => {
    return updateProfile(auth.currentUser, { displayName: name, photoURL: image });
  };
  
  const logoutUser = async () => {
      await signOut(auth);
  };

  //observe current user
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, async(currentUser)=>{
     setUser(currentUser);
     setLoading(false)
    });
    return () =>{
      return unsubscribe();
    };
  },[])


  const authInfo = { user, loading, createUser, loginUser, loginWithGoogle, updateUser, logoutUser};
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}