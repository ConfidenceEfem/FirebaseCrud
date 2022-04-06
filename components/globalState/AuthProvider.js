import React,{useState, useEffect, createContext} from "react"
import {app} from "../../base"
export const AuthContext = createContext()
export const AuthProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(()=>{
          app.auth().onAuthStateChanged((user)=>{
              setCurrentUser(user)
          })  
    },[])
    return(
        <AuthContext.Provider value={{message: "Hello World",currentUser}}>
                {children}
        </AuthContext.Provider>
    )
} 






















