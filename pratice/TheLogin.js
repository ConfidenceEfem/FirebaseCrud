import React,{useContext} from 'react'
import styled from "styled-components"
import {NavLink} from "react-router-dom"
import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import {Them} from "../components/TheAuthProvider"
import {TheAuthProvider} from "../components/TheAuthProvider"


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

 const schema = yup.object().shape({
     fname: yup.string().required(), 
    sname: yup.string().required(), 
    password: yup.string().required(), 
    confirm: yup.string().oneOf([yup.ref("password"),null]),
    email: yup.string().email().required(),
 })

 const {register, handleSubmit, formState:{errors}, reset} = useForm({resolver: yupResolver(schema)})

const click = handleSubmit((data)=>{
    console.log(data)
})

const {msg,current} = useContext(Them)
   
    return (
        <Container>
            <Wrapper >
                <Card onSubmit={click}>
                <Image src={image}/>
                <Upload htmlFor="pix">Upload your image</Upload>
                <input type="file" id="pix" style={{display: "none"}} onChange={imageUploader}/>
                <Handle><span>{errors.fname?.message}</span></Handle>
                <Inputs placeholder="Enter your Firstname"
            {...register("fname")}
                />
                <Handle><span>{errors.sname?.message}</span></Handle>
                <Inputs placeholder="Enter your Surname"
                  {...register("sname")} 
                 />
                 <Handle><span>{errors.password?.message}</span></Handle>
                <Inputs type="password" placeholder="Enter your password"
              {...register("password")}
                 />
                 <Handle><span>{errors.confirm?.message}</span></Handle>
                <Inputs type="password" placeholder="Confirm password"
             {...register("confirm")}
                 />
                 <Handle><span>{errors.email?.message}</span></Handle>
                <Inputs type="email" placeholder="Enter your Email"
            {...register("email")}
                 />
                <Login
                type="submit"
                onClick={()=>{
                
                }}>Login{msg}</Login>
                </Card>
                {/* <OtherLogin>Login with Google</OtherLogin> */}
                <Already>Don't have an account? {"  "}
                    <Linker to="/register"> {"  "} Click here to Sign Up</Linker>
                </Already>
            </Wrapper>
        </Container>
    )
}

export default TheLogin
const Handle = styled.div`
display: flex;
align-items: flex-end;
width: 300px;
span{
    font-weight: bold;
    color: red;
    font-size: 10px;
}
`

const Card = styled.form`
display: flex;
flex-direction: column;
align-items: center;
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

const Login = styled.button`
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
height: calc(100vh - 80px);
background-color: #eee;
display: flex;
justify-content: center;
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
