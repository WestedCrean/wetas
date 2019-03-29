import React, { useState } from "react"
import styled from "styled-components"
import { useSpring, animated } from 'react-spring'

const Side = styled.div`
  display: block;
  position: fixed;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  color: white;
  left: 0;
  z-index: 1000;
  justify-content: center;
  font-family: Karla;
  top: 40%;
  padding: 0px;

  text-align: center;
  background: #4a1096e0;
  
  transition: all 1s ease-in-out;
  & p {
    font-size: 22px;
    margin: 0;
    padding: 7px;
  }

  &:hover {
    background: black;
  }
  `;


const SideHelper = () => (
  <Side>
      <p>Godziny Otwarcia</p>
  </Side>
)

export default SideHelper
