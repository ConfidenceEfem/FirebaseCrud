import React from 'react'
import styled from "styled-components"
import logo from "./Logo.png"
import {NavLink} from "react-router-dom"
import {app} from "../base"
const Header = ({search, setSearch}) => {
    return (
        <Container>
            <Wrapper>
                <Logo src={logo}/>
                <SearchHolder>
                    <Search placeholder="Search"
                    value={search}
                    onChange={(e)=>{
                        setSearch(e.target.value)
                    }}/>
                    {/* <SearchIcon/> */}
                </SearchHolder>
                <LinkHolder>
                    <Nav to="/">Home</Nav>
                    <Nav to="/add">Add</Nav>
                    {/* <Nav to="/register">Register</Nav> */}
                    <Nav to="/login">Login</Nav>
                    <Nav1 onClick={()=>{
                        app.auth().signOut()
                    }}>Logout</Nav1>
                </LinkHolder>
            </Wrapper>
        </Container>
    )
}

export default Header

const Search = styled.input`
height: 30px;
width: 230px;
background-color: transparent;
border: none;
outline: none;
color:black;
::placeholder{
    color: black;
    opacity: 0.8;
    font-size: 12px;
}
`

const SearchHolder = styled.div`
display: flex;
width: 100%auto;
height: 100%;
align-items: center;
background-color: whitesmoke;
padding: 0 10px;
border-radius: 5px;
`

const Nav1 = styled.div`
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
const Nav = styled(NavLink)`
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
`

const Logo = styled.img`
width: 100px;
height: 50px;
object-fit: contain;

display: flex;

`

const Container = styled.div`
width: 100%;
height: 60px;
background-color: rgb(0,0,255,0.9);
display: flex;
justify-content: center;
align-items: center;
/* margin-bottom: 20px; */
`
const Wrapper = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items:center;
`
