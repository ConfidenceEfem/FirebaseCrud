import React from 'react'
import styled from "styled-components"
import {app} from "../base"
import {NavLink, useNavigate} from "react-router-dom"

const Add = () => {
    const navigate = useNavigate()
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
  
    const authLogin = async ()=>{
        await app.auth().signInWithEmailAndPassword(email, password)
        navigate("/")
    }
    return (
        <Container>
           <Wrapper>
               <Info>
                   Don't have an account yet? {" "}
                    <LinkTag to="/register">Click here</LinkTag>
               </Info>
                <Inputs wd placeholder="Enter your Email"
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }} />
                <Inputs placeholder="Enter your password"
                  value={password}
                  onChange={(e)=>{
                      setPassword(e.target.value)
                  }}/>
                <Submit to="/" mt="10px" wd="150px" bg="rgb(0,0,255,0.9)"
                onClick={()=>{
                    authLogin()
                }}>Login</Submit>
            
            
                <Submit to="/" mt="10px" wd="250px" bg="red"
                onClick={()=>{
                    // pushData()
                }}>Login with Google</Submit>
                
                <Submit to="/" mt="10px" wd="250px" bg="black"
                onClick={()=>{
                    // pushData()
                }}>Login with Github</Submit>
           </Wrapper>
        </Container>
    )
}

export default Add

const LinkTag = styled(NavLink)`
color: blue;
text-decoration: none;
`
const Info = styled.div`
font-weight: bold;
color: red;
`
const Submit = styled.div`
width:${({wd})=>wd};
height: 40px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${({bg})=>bg};
border-radius: 3px;
transform: scale(1);
transition: all 350ms;
color: white;
margin-top: ${({mt})=>mt};
text-decoration: none;
:hover{
    transform: scale(1.02);
    cursor: pointer;
}
`

const Inputs = styled.input`
outline: 2px solid blue;
border: none;
width: ${({wd})=>(wd? "250px" : "200px")};
margin: 15px 0;
height: 30px;
padding-left: 10px;
`

const Container = styled.div`
width: 100%;
min-height: calc(100vh - 60px);
display: flex;
/* background-color: blue; */
`
const Wrapper = styled.div`
padding-top: 50px;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
