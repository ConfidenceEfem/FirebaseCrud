import React from 'react'
import styled from "styled-components"
import {app} from "../base"
import {NavLink, useNavigate} from "react-router-dom"
import img from "./avatar.png"
import firebase from "firebase"
import CircularProgress from "@mui/material/CircularProgress"

const Add = () => {
    const navigate = useNavigate()
    const [quote, setQuote] = React.useState("")
    const [name, setName] = React.useState("")
    const [avatar, setAvatar] = React.useState(img)
    const [check, setCheck] = React.useState(0)
    const pushData = async ()=>{
        await app.firestore().collection("quotes").add({
            quote,
            name,
            image:avatar
        })
    navigate("/")
    }

    const upload = async (e)=>{
        const file = e.target.files[0]
        const save = URL.createObjectURL(file)
        setAvatar(save)

        const  fileRef = app.storage().ref()
        const storageRef = fileRef.child("img/"+file.name).put(file)
        storageRef.on(firebase.storage.TaskState.STATE_CHANGED, (snapshot)=>{
            const count = (snapshot.bytesTransferred/ snapshot.totalBytes) * 100
            console.log(count)
            setCheck(count)
        },(error)=>{
            console.log(error.message)
        },()=>{
            storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                console.log(url)
                setAvatar(url)
            })
        })
        
    }; 
    return (
        <Container>
           <Wrapper>
          {check===0? null : 
   check<99.99999? <CircularProgress style={{fontSize: "10px", position: "absolute", top: "90px"}}/> : null}
               <CircleHolder>
               <ShowImage src={avatar}/>
              
               </CircleHolder>
               
               <Label htmlFor="pix" > Upload Image</Label>
               <input type="file" id="pix" style={{display: "none"}} onChange={upload}/>
                <Inputs wd placeholder="Add Quotes"
                value={quote}
                onChange={(e)=>{
                    setQuote(e.target.value)
                }} />
                <Inputs placeholder="Add Author"
                  value={name}
                  onChange={(e)=>{
                      setName(e.target.value)
                  }}/>
                <Submit to="/"
                onClick={()=>{
                    pushData()
                }}>Submit</Submit>
           </Wrapper>
        </Container>
    )
}

export default Add

const CircleHolder = styled.div`
width: 150px;
height: 150px;
margin-bottom: 20px;
border: solid 3px rgb(0,0,255,0.8);
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
`
const Label = styled.label`
width: 200px;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
height: 30px;
background-color: rgb(0,0,255,0.8);
color: white;
font-size: 14px;
font-weight: bold;
transition: all 350ms;
:hover{
    border: solid 2px rgb(0,0,255,0.8);
    background-color:white;
    cursor: pointer;
    color: rgb(0,0,255,0.8);
}
`
const ShowImage = styled.img`
width: 150px;
height: 150px;
object-fit: cover;
border-radius: 50%;
`
const Submit = styled.div`
width: 100px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(0,0,255,0.9);
border-radius: 3px;
transform: scale(1);
transition: all 350ms;
color: white;
margin-top: 50px;
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
position: relative;
`
