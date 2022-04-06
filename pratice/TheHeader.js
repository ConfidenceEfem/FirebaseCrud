import React from 'react'
import styled from "styled-components"
import {NavLink} from "react-router-dom"

const TheHeader = () => {
    return (
        <Container>
            <Wrapper>
                <Navs to="/">HOME</Navs>
                <Navs to="/add">ADD</Navs>
                <Navs to="/register">REGISTER</Navs>
                <Navs to="/login">LOGIN</Navs>

            </Wrapper>
        </Container>
    )
}

export default TheHeader

const Navs = styled(NavLink)`
margin: 0 5px;
font-weight: bold;
font-size: 13px;
width: 80px;
height: 35px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 3px;
cursor: pointer;
transition: all 350ms;
color: whitesmoke;
text-decoration: none;
:hover{
    background-color: rgb(255,255,255,0.3);
}
`
const Wrapper = styled.div`
display: flex;
width: 80%;
display: flex;
align-items: center;
justify-content: center;
`
const Container = styled.div`
width: 100%;
height: 60px;
background-color: black;
display: flex;
align-items: center;
justify-content: center;
`
