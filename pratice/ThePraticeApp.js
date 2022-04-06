
import React from 'react'
import TheHeader from "./TheHeader"
import TheHome from './TheHome'
import TheAdd from "./TheAdd"
import TheRegister from "./TheRegister"
import TheLogin from "./TheLogin"
import TheEdit from "./TheEdit"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const ThePraticeApp = () => {
    const [profile, setProfile] = React.useState("")
    const [name, setName] = React.useState("")
    const [quote, setQuote] = React.useState("")
    const [nameHolder, setNameHolder] = React.useState("")
    const [profileHolder, setProfileHolder] = React.useState("")
    const [quoteHolder, setQuoteHolder] = React.useState("")
    return (
        <div>
            <Router>
            <TheHeader/>
                <Routes>
                    <Route exact path="/" element={<TheHome/>}/>
                    <Route  path="/add" element={<TheAdd 
                    profile={profile}
                    setProfile={setProfile}
                    name={name} 
                    setName={setName}
                    quote={quote}
                    setQuote={setQuote}
                    nameHolder={nameHolder}
                    setNameHolder={setNameHolder}/>}/>
                    <Route  path="/edit" element={<TheEdit    
                    nameHolder={nameHolder}
                    profileHolder={profileHolder}
                    quoteHolder={quoteHolder}
                    setNameHolder={setNameHolder}
                    setProfileHolder={setProfileHolder}
                    setQuoteHolder={setQuoteHolder}/>}/>
                    <Route  path="/register" element={<TheRegister/>}/>
                    <Route  path="/login" element={<TheLogin/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default ThePraticeApp
