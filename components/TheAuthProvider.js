import React,{useState,useEffect,createContext} from "react"
import {app} from "../base"
export const Them  = createContext()

export const TheAuthProvider = ({children})=>{
    const [current, setCurrent] = useState(null)

    useEffect(()=>{
        app.auth().onAuthStateChanged((data)=>{
            setCurrent(data)
        })
    },[])
    return(
        <Them.Provider value={{msg: "Hello",current}}>
            {children}
        </Them.Provider>
    )
}