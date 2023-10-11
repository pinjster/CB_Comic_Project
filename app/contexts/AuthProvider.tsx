import { initializeApp } from "firebase/app";
import { createContext } from "react";

interface AuthContextValues {
  signIn: () => void,
  signUp: () => void,
  signOut: () => void,
}

export const AuthContext = createContext({} as AuthContextValues)

export default function AuthProvider({ children }: { children: JSX.Element | JSX.Element[] }){
  
  const firebaseConfig = {
    apiKey: process.env.firebase_apiKey,
    authDomain: process.env.firebase_authDomain,
    projectId: process.env.firebase_projectId,
    storageBucket: process.env.firebase_storageBucket,
    messagingSenderId: process.env.firebase_messagingSenderId,
    appId: process.env.firebase_appId
  };
  
  const app = initializeApp(firebaseConfig);
  
  function signIn() {
    return
  }

  function signUp() {
    return
  }

  function signOut() {
    return
  }

  const value = {
    signIn,
    signUp,
    signOut
  }

  return (
    <AuthContext.Provider value={ value }>
      { children }
    </AuthContext.Provider>
  )
}
