import React from 'react'
import Header from './Header'
import Home from './Home'
import Add from "./Add"
import Edit from "./Edit"
import Register from "./Register"
import Login from "./Login"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MyNewSignUp from './MyNewSignUp'
const CrudApp = () => {
    const [search,setSearch] = React.useState("")
    return (
        <div>
         <Router>
         <Header search={search} setSearch={setSearch}/>
             <Routes>
              
                <Route path="" element={<Home search={search} setSearch={setSearch}/>}/>
                <Route path="/add" element={<Add/>}/>
                <Route path="/add/:id" element={<Edit/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
             </Routes>
         </Router>
         {/* <Header/>
         <Add/> */}
        </div>
    )
}

export default CrudApp
