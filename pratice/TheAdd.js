import React from 'react'
import styled from "styled-components"
import {NavLink, useNavigate} from "react-router-dom"
import {app} from "../base"
const TheAdd = ({profile,
    setProfile,
    name,
    setName,
    quote,
    setQuote,nameHolder,
    setNameHolder,}) => {

        const navigate = useNavigate()

        const imageUpload = (e)=>{
            const file = e.target.files[0]
            const save = URL.createObjectURL(file)
            setProfile(save)

            
        }

        const pushData = async ()=>{
            await app.firestore().collection("pratice").add({
                name,
                quote,
                profile,
            })
            navigate("/")
        }
    return (
        <Container>
            <Wrapper>
                <Image  src={profile}/>
                <Upload htmlFor="pix">Upload your image</Upload>
                <input type="file" id="pix" onChange={imageUpload}  style={{display: "none"}}/>
                <Inputs placeholder="Enter your name"
                value={name}
                onChange={(e)=>{
                    setName(e.target.value);
                }}/>
                <Text placeholder="Enter your quote"
                value={quote}
                onChange={(e)=>{
                    setQuote(e.target.value);
                }}/>
                <Add to="/" onClick={()=>{
                    setNameHolder(name)
                    pushData()
                }}>Add</Add>
            </Wrapper>
        </Container>
    )
}

export default TheAdd
const Add = styled(NavLink)`
padding: 10px 20px;
background-color: blue;
font-weight: bold;
cursor: pointer;
border-radius: 5px;
font-size: 13px;
color: white;
`
const Text = styled.textarea`
width: 300px;
height: 150px;
margin-bottom: 20px;
`
const Inputs = styled.input`
background-color: transparent;
border: none;
border-bottom: 2px solid black;
outline: none;
width: 300px;
margin-bottom: 20px;
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
margin-bottom: 20px;
`
const Image = styled.img`
width: 200px;
height: 180px;
border-radius: 5px;
margin: 10px 0;
object-fit: cover;
background-color: white;
`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Container = styled.div`
width: 100%;
padding-top: 20px;
height: calc(100vh - 80px);
background-color: #eee;
display: flex;
justify-content: center;
`
