import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"


const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    min-height: 35px;
    margin: 0;
    padding: 18px;
    background-color: #292834;
    color: #fff;
    font-family: Roboto, sans-serif;

    & a {
        padding: 0 5px;
        text-decoration: none;
        color : #a765ff;
    }
`;


  
  const Footer = (props) => (
    <FooterWrapper>
    
        <p>© {new Date().getFullYear()}, {props.title} | Projekt i wykonanie <a href="https://www.wikflis.me">Wiktor Flis</a>
        </p>
         
    </FooterWrapper>
  )
  
  export default Footer