import React, {useEffect,useState} from 'react';
import styled from "styled-components";
import Loca from "../assets/images/place.svg";
import axios from 'axios';
import { useParams } from "react-router";

export default function Single() {

    const [locations,setLocations] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios
            .get(`https://traveller.talrop.works/api/v1/places/view/${id}`)
            .then(function (response) {
            setLocations(response.data.data);
            })
            .catch(function (error) {
            });
    }, []);
    return (
        <>
        <Div>
            <Name> {locations.name} </Name>
            <Divplace><a> {locations.category_name} </a> <Icon><Location src={Loca} alt="Icon" /></Icon><Span>{locations.name}</Span></Divplace>
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
const Div = styled.div `
    width: 75%;
    margin: 0 auto;
`;