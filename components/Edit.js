import React from 'react'
import styled from "styled-components"
import {app} from "../base"
import {useParams, useNavigate} from "react-router-dom"

const Add = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [name, setName] = React.useState("")
    const pushData = async ()=>{
        await app.firestore().collection("quotes").doc(id).update({
            name,
        })
    navigate("/")
    }
    return (
        <Container>
           <Wrapper>
                <Inputs placeholder="Edit Author"
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
`
