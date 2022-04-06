import React,{useContext} from 'react'
import {AuthContext} from "./globalState/AuthProvider"
import styled from "styled-components"
import logo from "./Logo.png"
import {app} from "../base"
import firebase from "firebase"
import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import CircularProgress from "@mui/material/CircularProgress"
const MyNewSignUp = () => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [image, setImage] = React.useState("")
    const [hold, setHold] = React.useState({})
    
    const {message,currentUser} = useContext(AuthContext) 
    console.log(currentUser)




    const schema = yup.object().shape({
    name: yup.string().required("Please input your name"),
    email: yup.string().email().required("Email is compulsory"),
    password: yup.string().required("Please input a password "),
    confirm: yup.string().oneOf([yup.ref("password"), null])
})

const {register,handleSubmit,formState:{errors},reset} = useForm({resolver: yupResolver(schema)})

    const onHold = (e)=>{
        setHold({...hold, [e.target.name] : e.target.value})
    }

    const submitHandle = handleSubmit(async (data)=>{
            console.log(data)
            const {email, password} = data
            await app.auth().createUserWithEmailAndPassword(email,password)
    })

    const uploadImage = (e)=>{
        const file = e.target.files[0]
        const save =URL.createObjectURL(file)
        setImage(save)
        const fileRef = app.storage().ref()
        const storageRef = fileRef.child("img/" + file.name).put(file)
        storageRef.on(firebase.storage.TaskEvent.STATE_CHANGED, ((snapshot)=>{
                const count = (snapshot.bytesTransferred/snapshot.totalBytes)*100
                console.log(count)
        }),(error)=>{
            console.log(error.message)
        },()=>{
            storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                console.log(url)
                setImage(url)
            })
        })
    }

   

    // const authLogin = async ()=>{
    //     await app.auth().createUserWithEmailAndPassword(email, password)
    // }

    
    return (
        <Container>
            <Wrapper>
                <HeaderItems>
                <Logo src={logo}/>
                <LinkHolder>
                    <Nav>Home</Nav>
                    <Nav >Add</Nav>
                    <Nav >Contact</Nav>
                </LinkHolder> 


         <Image src={image} onClick={()=>{app.auth().signOut()}} />
                </HeaderItems>
                <BodyItems>
                {/* <CircularProgress /> */}
                   <Card onSubmit={submitHandle}>
                   <Profile src={image}/>
                    <Upload htmlFor="pix">Upload your Image</Upload>
                    <input type="file" id="pix" style={{display: "none"}} onChange={uploadImage}/>
                    <Holder><Error>{errors?.name?.message}</Error></Holder>
                    <Inputs placeholder="User Name"
                     name="name"
                     onChange={onHold}
                     {...register("name")}
                    />
                    <Holder><Error>{errors?.email?.message}</Error></Holder>
                    <Inputs placeholder="confidenceefem1@gmail.com" 
                    // type="email" value={email}
                    // onChange={(e)=>{
                    //     setEmail(e.target.value)
                    // }}
                    name="email"
                    onChange={onHold}
                    {...register("email")}
                    />
                    <Holder><Error>{errors?.password?.message}</Error></Holder>
                    <Inputs placeholder="Password" type="password"
                    //  value={password}
                    // onChange={(e)=>{
                    //     setPassword(e.target.value)
                    // }}
                    name="password"
                    onChange={onHold}
                    {...register("password")}
                    />
                    <Holder><Error>{errors?.confirm?.message}</Error></Holder>
                    <Inputs placeholer="Confirm Password" type="password"
                    name="confirm"
                    onChange={onHold}
                    {...register("confirm")}
                    />
                    <div>{}</div>
                    <Submit     type="submit"
                    //  onClick={()=>{
                    //     console.log(hold)
                    //     const {email, password} = hold
                    //     console.log(email, password)
                 
                    // }}
                    
                    >Submit</Submit>
                   </Card>
                </BodyItems>
            </Wrapper>
        </Container>
    )
}

export default MyNewSignUp
const Holder = styled.div`
width: 150px;
display: flex;
`
const Error = styled.div`
font-size: 10px;
font-weight: bold;
color: red;
`
const Card  = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`
const Submit = styled.button`
width: 150px;
height: 30px;
font-size: 13px;
background-color: blue;
color: white;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
margin-top: 30px;
`
const Inputs = styled.input`
margin: 5px 0px;
width: 150px;
height: 30px;
`
const Profile= styled.img`
width: 150px;
height: 150px;
border-radius: 50%;
margin-bottom: 10px;
border: solid 2px blue;
`
const Upload = styled.label`
width: 200px;
height: 35px;
display: flex;
justify-content: center;
align-items: center;
font-size: 13px;
margin-bottom: 30px;
background-color: blue;
color: white;
cursor: pointer;
`
const Image = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
object-fit: cover;
display: flex;
margin-right: 20px;
border: 2px solid whitesmoke;
`

const Nav = styled.div`
padding: 7px 15px;
background-color: whitesmoke;
font-weight: bold;
font-family: Arial, Helvetica, sans-serif;
margin: 0 15px;
color: blue;
border-radius: 4px;
text-decoration: none;
font-size: 12px;
`

const LinkHolder = styled.div`
display: flex;
align-items: center;
flex: 1;
`

const Logo = styled.img`
width: 100px;
height: 50px;
object-fit: contain;
display: flex;
margin-left: 20px;
margin-right: 50px;

`

const HeaderItems = styled.div`
width: 100%;
background-color: blue;
height: 70px;
display: flex;
align-items :center;
margin-bottom: 30px;
`
const BodyItems = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: calc(100vh - 100px);
`

const Container = styled.div`
width: 100%;
min-height: 100vh;
height: 100%auto;
background-color: #eee;
justify-content: center;
display: flex;
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
`
