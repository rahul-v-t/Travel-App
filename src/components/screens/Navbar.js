import React from 'react';
import Logo from "../assets/images/logo.svg";
import styled from "styled-components";

export default function Navbar() {
    return (
        <>
        <Nav>
            <Header>
            <Left>
                <h1><Logoimage src={Logo} alt="Logo" /></h1>
            </Left>
            <Right> 
                <Login>Login</Login>
            </Right>
            </Header>
        </Nav>
        </>
    )
}
const Nav = styled.nav `
     width : 90%;
     margin:0 auto;
`;
const Header = styled.header `
    display: flex;
    justify-content:space-between;
    margin:20px 0;
    font-size:16px;
    font-weight:500;
    align-items:center;
`;
const Left = styled.div `
`;
const Login = styled.a `
    padding: 12px 30px;
    border-radius: 6px;
    background: blue;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
`;
const Right = styled.div `
`;
const Logoimage = styled.img `
    cursor:pointer;
`; 