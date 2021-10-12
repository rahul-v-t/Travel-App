import React, {useEffect,useState} from 'react';
import styled from "styled-components";
import Loca from "../assets/images/place.svg";
import axios from 'axios';
import { useParams } from "react-router";
import {Helmet} from "react-helmet";

export default function Single() {

    const [locations,setLocations] = useState([]);
    const [gallery,setGallery] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios
            .get(`https://traveller.talrop.works/api/v1/places/view/${id}`)
            .then(function (response) {
            setLocations(response.data.data);
            setGallery(response.data.data.gallery);
            })
            .catch(function (error) {
            });
    }, []);
    let renderGallery = () =>{
        return gallery.map((item) =>(
                <Item key={item.id}> <Img2 src={item.image} /> </Item>
        ));
    
    };
    return (
        <>
        <Div>
            <Helmet>
                <title>{locations.location}</title>
            </Helmet>
            <Name> {locations.name} </Name>
            <Divplace><A> {locations.category_name} </A> <Icon><Location src={Loca} alt="Icon" /></Icon><Span>{locations.location}</Span></Divplace>
            <Container>
                <Item1> <Img1 src={locations.image} alt="Image" /> </Item1>
                <Item2> {renderGallery()}</Item2>
            </Container>
            <H3>Place Details</H3>
            <P> {locations.description} </P>
        </Div>
        </>
    )
}

const Name = styled.h1 `
    margin-top: 10px;
    font-size: 42px;
    color: #000000;
    font-weight: 600;
`;
const Divplace = styled.div `
    display: flex;
    align-items:center;
    margin-top: 10px;
`;
const Icon = styled.div `
    width:1%;
    margin-right: 5px;
    cursor: pointer;
`;
const Location = styled.img `
    display: block;
    width :100%;
`;
const Span = styled.span `
    cursor:pointer;
    color: #cfcfcf;
`;
const Div = styled.div `
    width: 75%;
    margin: 0 auto;
`;
const A = styled.a `
    color: #cfcfcf;
    border: 1px solid #cfcfcf;
    border-radius: 16px;
    padding: 8px;
    margin-right: 10px;
`;
const Img1 = styled.img `
    display:block;
    width:100%;
    border-radius: 14px 0 0 0;
`;
const Container = styled.div `
    display:flex;
    align-items: center;
    margin-top: 40px;
`;
const Item1 = styled.div `
    width:50%;
    margin-right:20px;
    
`;
const Item = styled.div `
    &:nth-child(2){
        border-radius:0 8px 0 0;
    }
    &:nth-child(4){
        border-radius:0 0 8px 0;
    }
    overflow:hidden;
    
`;
const Item2 = styled.div `
    display: grid;
    grid-template-columns: auto auto ;
    grid-gap: 20px;
    width: 50%;
`;
const Img2 = styled.img `
    display: block;
    width: 100%;
`;
const H3 = styled.h3 `
    font-size: 28px;
    font-weight: 600;
    margin: 20px 0;
`;
const P = styled.p `
    color: #4e3838;
`;