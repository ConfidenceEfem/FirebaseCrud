import React from 'react'
import styled from "styled-components"
import {NavLink} from "react-router-dom"
const TheLogin = () => {
    const [firstname, setFirstname] = React.useState("")
    const [surname, setSurname] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [email, setEmail]  = React.useState("")
    const [image, setImage] = React.useState("")

    const imageUploader = (e)=>{
        const file = e.target.files[0]
        const save = URL.createObjectURL(file)
        setImage(save)
    }
    return (
        <Container>
            <Wrapper>
                <Image/>
                <Upload htmlFor="pix">Upload your image</Upload>
                <input type="file" id="pix" style={{display: "none"}} onChange={imageUploader}/>
                <Inputs placeholder="Enter your Firstname"
                value={firstname} 
                onChange={(e)=>{
                    setFirstname(e.target.value)
                }}/>
                <Inputs placeholder="Enter your Surname"
                 value={surname} 
                 onChange={(e)=>{
                     setSurname(e.target.value)
                 }}/>
                <Inputs type="password" placeholder="Enter your password"
                 value={password} 
                 onChange={(e)=>{
                     setPassword(e.target.value)
                 }}/>
                <Inputs type="email" placeholder="Enter your Email"
                 value={email} 
                 onChange={(e)=>{
                     setEmail(e.target.value)
                 }}/>
                <Login>Login</Login>
                <OtherLogin bg="red" cl="white">Login with Google</OtherLogin>
                <OtherLogin bg="black" cl="whitesmoke">Login with GitHub</OtherLogin>
                <OtherLogin bg="blue" cl="white">Login with Facebook</OtherLogin>
                <Already>Already have an account? {"  "}
                    <Linker to="/login"> {"  "} Click here to Login</Linker>
                </Already>
            </Wrapper>
        </Container>
    )
}

export default TheLogin

const OtherLogin = styled.div`
width: 200px;
height: 30px;
background-color: ${({bg})=>bg};
display: flex;
justify-content: center;
align-items: center;
color: ${({cl})=>cl};
margin-top: 10px;
font-size: 13px;
font-weight: bold;
cursor: pointer;
`
const Linker = styled(NavLink)`
font-weight: bold;
color: blue;
cursor: pointer;
text-decoration: none;
`
const Already = styled.div`
font-size: 13px;
font-weight: bold;
display: flex;
margin-top: 10px;
`

const Login = styled.div`
padding: 10px 25px;
background-color: blue;
font-size: 13px;
color: white;
margin-top: 20px;
cursor: pointer;
`

const Inputs = styled.input`
width: 300px;
height: 30px;
border: none;
outline: none;
border-bottom: 2px solid lightgray;
padding: 0px 5px;
margin: 5px 0;
background-color: transparent;

`

const Upload = styled.label`
width: 250px;
height: 40px;
border-radius: 15px;
background-color: lightgray;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
margin-bottom: 30px;
`

const Image = styled.img`
width: 150px;
height: 150px;
border-radius: 50%;
object-fit: cover;
background-color: black;
margin-bottom: 10px;
`

const Container = styled.div`
width: 100%;
padding-top: 20px;
min-height: calc(100vh - 80px);
height: 100%auto;
background-color: #eee;
display: flex;
justify-content: center;
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
