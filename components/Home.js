import React from 'react'
import styled from "styled-components"
import bg from "./bg.jpg"
import {NavLink} from "react-router-dom"
import {app} from "../base"
// import CircularProgress from '@mui/material/CircularProgress';





const Home = ({search, setSearch}) => {
    const [data, setData] = React.useState([])
    const getData = async ()=>{
            await app.firestore().collection("quotes")
           
            .onSnapshot((snapshot)=>{
                const store = []
                snapshot.forEach((doc)=>{
                    store.push({...doc.data(), id: doc.id})
                })
                setData(store)
            })
            console.log(data)
    }

    const DeleteItems = async (id)=>{
        await app.firestore().collection("quotes").doc(id).delete()
    }
    React.useEffect(()=>{
getData()

    },[])
    return (
        <Container>
            <Wrapper>
               {data.filter((e)=>{
                   if(search===""){
                       return e
                   }else if(e.name.toLowerCase().includes(search.toLowerCase())){
                       return e
                   }
               })
               ?.map((props)=>(
                   <Card>
                   <Quote bg={props.image}>
                         <Text>
                        <span> "{props.quote}"</span>
                         </Text>
                     
                     </Quote>
                     <Author>
                        {props.name}
                     </Author>
                     <ButtonHolder>
                         <Button1  bg 
                        to={`add/${props.id}`}>Edit</Button1>
                         <Button
                         onClick={()=>{
                            DeleteItems(props.id)
                         }}>Delete</Button>
                     </ButtonHolder>
                    </Card>
               ))}
                 
            </Wrapper>
        </Container>
    )
}

export default Home
const Text = styled.div`
font-size: 12px;
    color: blue;
    width: 100%;
    height: 100%;
    background-color: rgb(0,0,0,0.4);
    display: flex;
    justify-content: center;
align-items: center;
color: lightgray;
transition: all 350ms;

span{
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
:hover{
    cursor: pointer;
    background-color: rgb(0,0,0,0.6);
    color: white;
}
`

const Button1 = styled(NavLink)`
width: 80px;
background-color: ${({bg})=>(bg? "blue" : "red")};
color: whitesmoke;
font-size: 12px;
display: flex;
justify-content: center;
align-items: center;
height: 30px;
border-radius: 4px;
transform: scale(1);
transition: scale(1.02);
text-decoration: none;
:hover{
transform: scale(1.02);
cursor: pointer;
}
`
const Button = styled.div`
width: 80px;
background-color: ${({bg})=>(bg? "blue" : "red")};
color: whitesmoke;
font-size: 12px;
display: flex;
justify-content: center;
align-items: center;
height: 30px;
border-radius: 4px;
transform: scale(1);
transition: scale(1.02);
text-decoration: none;
:hover{
transform: scale(1.02);
cursor: pointer;
}
`

const ButtonHolder = styled.div`
display: flex;
justify-content: space-between;
width: 90%;
align-items: center;
`
const Author = styled.div`
font-size: 11px;
font-weight: bold;
margin-top: 5px;
margin-bottom: 20px;
`
const Quote = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: lightgray;
font-weight: bold;
background-image: url(${({bg})=>bg});
background-size: cover;
height: 60%;
display: flex;
transition: all 350ms;
width: 100%;
span{
    
code{
    width: 95%;
    display: flex;
    flex-wrap:wrap;
}
:hover{
   
}

}
`
const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border-radius: 10px;
width: 200px;
height: 250px;
background-color: white;
box-shadow: 1px 1px 7px 1px lightgray;
overflow: hidden;
transform: scale(1);
transition:all 350ms;
margin: 10px;
:hover{
    transform: scale(1.01);
}
`

const Container = styled.div`
width: 100%;
display: flex;
min-height: calc(100vh - 60px);
background-color: #eee;
justify-content: center;
`
const Wrapper = styled.div`
width: 90%;
display: flex;
height: 100%;
flex-wrap: wrap;
padding-top: 20px;
`
