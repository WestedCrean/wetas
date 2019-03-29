import React from "react"
import styled from "styled-components"
import Carousel from "nuka-carousel"
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import SliderWrapper from "./SliderWrapper"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Butt = styled.button`
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  padding: 10vh 0;
  overflow: visible;
  text-transform: none;
  border: none;
  font-size: 4em;
  background-color: #00000000;
  color: ghostwhite;

  &:focus {
    outline: none;
  }
`

const Slider = () => {
  // GraphQL query for all images for slides
  const slidesQuery = useStaticQuery(graphql`
    query {
      placeholderImage1: file(relativePath: { eq: "asphoto-1.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 1300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      placeholderImage2: file(relativePath: { eq: "asphoto-2.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 1300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      placeholderImage3: file(relativePath: { eq: "asphoto-3.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 1300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const Background = styled.div`
    background: #5e1096;
    background: -webkit-linear-gradient(to right, #4a1096, #ab44ff);
    background: linear-gradient(to right, #4a1096, #ab44ff);
    height: 100%;
    padding-top: 30px;
  `

  const Slider = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-height: 60vh;
    width: 100%;
    overflow: hidden;
    position: relative;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    
   
  `

  


  return (
    <Background>
      <Slider>
        <Carousel
          initialSlideHeight={700}
          heightMode={['first']}
          
          renderBottomCenterControls={({ currentSlide }) => <div />}
          renderCenterLeftControls={({ previousSlide }) => (
            <Butt onClick={previousSlide}>
              <FaChevronLeft />
            </Butt>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <Butt onClick={nextSlide}>
              <FaChevronRight />
            </Butt>
          )}
          
          
        >
          <SliderWrapper>
            <Img fluid={slidesQuery.placeholderImage1.childImageSharp.fluid} />
          </SliderWrapper>
          <SliderWrapper>
            <Img fluid={slidesQuery.placeholderImage2.childImageSharp.fluid} />
          </SliderWrapper>
          <SliderWrapper>
            <Img fluid={slidesQuery.placeholderImage3.childImageSharp.fluid} />
          </SliderWrapper>
        </Carousel>
      </Slider>
    </Background>
  )
}

export default Slider
