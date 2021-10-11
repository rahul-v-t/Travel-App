import React, {useEffect,useState} from 'react';
import styled from "styled-components";
import axios from 'axios';
import Loca from "../assets/images/place.svg";
import Logo from "../assets/images/logo.svg";
export default function Travel() {
    const [places,setPlaces] = useState([]);
    useEffect(() => {
        axios
            .get('https://traveller.talrop.works/api/v1/places/')
            .then(function (response) {
            console.log(response);
            setPlaces(response.data.data);
            })
            .catch(function (error) {
            console.log(error);
            });
    }, []);

    let renderItems = () => {
        return places.map((place) => (
            <Lists key={place.id}>
                <List>
                    <div><img src={place.image} alt="Image" /></div>
                    <h3> {place.name} </h3>
                    <div> <p>  <img src={Loca} alt="Icon" /> <span> {place.location}  </span> </p></div>
                </List>
            </Lists>
        ));
    };
    return <>
            <Body>
            <Header>
            <Left>
                <h1><Logoimage src={Logo} alt="Logo" /></h1>
            </Left>
            <Right> 
                <Login>Login</Login>
            </Right>
            </Header>
            <Section>
                <Heading>Welcome</Heading>
                <P>Explore world around you</P>
                <div> {renderItems()} </div>;
            </Section>
            </Body>
           </>
}

const Body = styled.body `
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
    padding:15px 30px;
    border-radius:4px;
    background:blue;
    color:#fff;
    cursor:pointer;
`;
const Right = styled.div `
`;
const Logoimage = styled.img `
    cursor:pointer;
`; 
const Section = styled.section `
`;
const Heading = styled.h2 `
    margin-top: 100px;
    margin-bottom: 15px;
    font-size: 38px;
    font-weight: 700;
`;
const P = styled.p `
    font-size: 22px;
    font-weight: 500;
    color: #cfcfcf;
    margin-bottom: 30px;
`;
const Lists = styled.ul `
`;
const List = styled.li `
`;