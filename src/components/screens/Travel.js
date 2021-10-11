import React, {useEffect,useState} from 'react';
import styled from "styled-components";
import axios from 'axios';
import Loca from "../assets/images/place.svg";
import {Link} from "react-router-dom";

export default function Travel() {
    const [places,setPlaces] = useState([]);
    useEffect(() => {
        axios
            .get('https://traveller.talrop.works/api/v1/places/')
            .then(function (response) {
            setPlaces(response.data.data);
            })
            .catch(function (error) {
            });
    }, []);

    let renderItems = () => {
        return places.map((place) => (
                <List key={place.id}>
                    <Link to={`/place/${place.id}`}>
                        <Imagecontainer><Images src={place.image} alt="Image" /></Imagecontainer>
                        <Name> {place.name} </Name>
                        <Divplace><Icon><Location src={Loca} alt="Icon" /></Icon><Span>{place.location}</Span></Divplace>
                    </Link>
                </List>
        ));
    };
    return <>
            <Body>
            <Section>
                <Heading>Welcome</Heading>
                <P>Explore world around you</P>
                <Lists>
                {renderItems()}
                </Lists>
                 
            </Section>
            </Body>
           </>
}

const Body = styled.body `
    width : 90%;
    margin:0 auto;
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
    display: flex;
    flex-wrap:wrap;
`;
const List = styled.li `
    width:25%;
    margin-bottom: 30px;
    &:hover{
        transform:scale(.9);
        transition:1s;
    }
`;
const Imagecontainer = styled.div `
    width: 85%;     
`;
const Images = styled.img `
    display: block;
    width: 100%;
    border-radius: 8px 8px 0 0;
    cursor :pointer;
`;
const Name = styled.h3 `
    margin-top: 10px;
    font-size: 24px;
    color: #000000;
    font-weight: 600;
`;
const Divplace = styled.div `
    display: flex;
    align-items:center;
    margin-top: 10px;
`;
const Icon = styled.div `
    width:5%;
    margin-right: 10px;
    cursor: pointer;
`;
const Location = styled.img `
    display: block;
    width :100%;
`;
const Span = styled.span `
    cursor:pointer;
    color: #000000;
`;