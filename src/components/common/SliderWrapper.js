import React from 'react'
import styled from "styled-components"
import {useSpring} from 'react-spring'

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 100%;
    

    &:nth-child(2) {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
    }

    & img {
        
    }
`;

const Text = styled.div`
    position: absolute;
    z-index: 10;
    margin: 8vw;
    color: ghostwhite;

    & > h1 {
        font-size: 3rem;
        font-weight: 600;
        font-family: "Raleway", "Roboto", sans-serif;
    }

`;




const SliderWrapper = (props) => (
    <Wrapper>
        <Text>
            <h1>{props.header}</h1>
            <p>{props.desc}</p>
        </Text>
      {props.children}
    </Wrapper>
)

export default SliderWrapper