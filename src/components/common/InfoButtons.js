import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useSpring, animated } from 'react-spring'

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 0;
    padding: 40px 0;
    background: #5e1096;
    background: -webkit-linear-gradient(to right,#4a1096,#ab44ff);
    background: linear-gradient(to right,#4a1096,#ab44ff);    color: #fff;
    font-family: Roboto, sans-serif;
    & a {
        padding: 0 5px;
        text-decoration: none;
        color : #F61067;
    }
    @media (min-width: 771px) {
        flex-direction: row;
    }

`;

const Button = styled.button`
    display: block;
    background-color: initial;
    color: ghostwhite;
    border: 3px solid ghostwhite;
    padding: 1em;

    font-size: 30px;
    width: 70vw;
    margin: 20px auto;
    line-height: 1.1em;
    &:hover {
        cursor: pointer;
    }

    @media (min-width: 771px) {
        font-size: 30px;
        margin: auto 30px;
        width: initial;
        padding: 0.6em;

    }
`;
  
  const InfoButtons = () => (
    <ButtonWrapper>
        <Link to="/"><Button>Akupunktura Akuwet</Button></Link>
        <Link to="/"><Button>Aktualności</Button></Link>
    </ButtonWrapper>
  )
  
  export default InfoButtons