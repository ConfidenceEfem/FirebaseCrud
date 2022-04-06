import React from 'react'
import styled from "styled-components"
import {app} from "../base"
import {NavLink, useNavigate} from "react-router-dom"
import firebase from "firebase"

const Add = () => {
    const navigate = useNavigate()
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    // const pushData = async ()=>{
    //     await app.firestore().collection("quotes").add({
    //         email,
    //         password,
    //     })
    // navigate("/")
    // }

    const authGoogle = async ()=>{
        const provider = new firebase.auth.GoogleAuthProvider()
        await app.auth().signInWithPopup(provider)
        navigate("/")
    }

    const authGitHub = async ()=>{
        const provider = new firebase.auth.GithubAuthProvider()
        await app.auth().signInWithPopup(provider)
        navigate("/")
    }

    const authSign = async ()=>{
        await app.auth().createUserWithEmailAndPassword(email, password)
        navigate("/")
    }

    const authFacebook = async ()=>{
        const provider = new firebase.auth.FacebookAuthProvider()
        await app.auth().signInWithPopup(provider)
    }
    return (
        <Container>
           <Wrapper>
           <Info>
                   Already have an account? {" "}
                    <LinkTag to="/login">Click here</LinkTag>
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
                   <Submit  mt="10px" wd="150px" bg="rgb(0,0,255,0.9)"
                onClick={()=>{
                     authSign()
                }}>Register</Submit>
            
            
                <Submit  mt="10px" wd="250px" bg="red"
                onClick={()=>{
                    authGoogle()
                }}>Login with Google</Submit>
                
                <Submit  mt="10px" wd="250px" bg="black"
                onClick={()=>{
                    authGitHub()
                }}>Login with Github</Submit>
                <Submit  mt="10px" wd="250px" bg="blue"
                onClick={()=>{
                    authFacebook()
                }}>Login with Facebook</Submit>
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
