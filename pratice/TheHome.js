import React from 'react'
import styled from "styled-components"
import {NavLink} from "react-router-dom"
import {app} from "../base"
import img from "../components/bg.jpg"
const TheHome = () => {
    const [data, setData] = React.useState([])
    const getData = async ()=>{
        await app.firestore().collection("pratice").onSnapshot((snapshot)=>{
            const store = []
            snapshot.forEach((doc)=>{
                store.push({...doc.data(), id:doc.id})
            })
            setData(store)
            console.log(data)
        })
    }

    React.useEffect(()=>{
getData()
    },[])
    return (
        <Container>
            <Wrapper>
                {data?.map((props)=>(
                    <Card key={props.id}>
                    <Background a={img}>
                        <BackOp>
                            <QuoteHolder>
                                <TheQuote>{props.quote}</TheQuote>
                            </QuoteHolder>
                        </BackOp>
                    </Background>
                    <Author>{props.name}</Author>
                    <ButtonHolder>
                        <Button1 to="/edit" bg="blue">Edit</Button1>
                        <Button bg="red">Delete</Button>
                    </ButtonHolder>
                </Card>
                ))}
            </Wrapper>
        </Container>
    )
}

export default TheHome

const Button1 = styled(NavLink)`
width: 80px;
height: 35px;
display: flex;
justify-content: center;
align-items: center;
margin: 5px;
background-color: ${({bg})=>bg};
border-radius: 4px;
font-size: 13px;
color: white;
cursor: pointer;
text-decoration: none;
`
const Button = styled.div`
width: 80px;
height: 35px;
display: flex;
justify-content: center;
align-items: center;
margin: 5px;
background-color: ${({bg})=>bg};
border-radius: 4px;
font-size: 13px;
color: white;
cursor: pointer;
text-decoration: none;
`
const ButtonHolder = styled.div`
display: flex;
width: 95%;
align-items: center;
justify-content: center;
margin-top: 20px;
`
const Author = styled.div`
text-align: center;
font-weight: bold;
font-size: 12px;
`
const TheQuote = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 12px;
text-align: center;
`
const QuoteHolder = styled.div`
width: 97%;
height: 98%;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`
const BackOp = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(0,0,0,0.3);
transition: all 350ms;
color: whitesmoke;
:hover{
    background-color: rgb(0,0,0,0.6);
    color: white;
}
`
const Background = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${({a})=>a});
height: 55%;
background-size: cover;
background-repeat: no-repeat;
margin-bottom: 5px;
`

const Card = styled.div`
display: flex;
flex-direction: column;
width: 200px;
height: 250px;
background-color: white;
border-radius: 8px;
overflow: hidden;
margin: 15px;
`
const Wrapper = styled.div`
width: 95%;
display: flex;
flex-wrap: wrap;
`
const Container = styled.div`
width: 100%;
min-height: calc(100vh - 80px);
height: 100%auto;
background-color: #eee;
display: flex;
justify-content: center;
padding-top: 20px;
`