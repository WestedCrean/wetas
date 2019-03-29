import React, { useState }  from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { FaFacebookF } from 'react-icons/fa';
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

const Nav = styled.nav`
  display: none;


  @media (min-width: 770px) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        
        margin-top: 110px;
        width: 80vw;
        color: #5e1096;
    }
    @media (min-width: 1400px) {
      justify-content: center;
      width: initial;
      color: ghostwhite;
    }
    padding-bottom: 40px;
`

const StyledLink = styled(Link)`
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  color: #000000;
  text-decoration: none;
  font-size: 1.5rem;

  @media (min-width: 770px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1400px) {
    font-size: 1.5rem;
  }
`

const Anchor = styled.a`
      font-family: -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  color: #000000;
  text-decoration: none;
  font-size: 1.5rem;

  @media (min-width: 770px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1400px) {
    font-size: 1.5rem;
  }
`;

const Button = styled(animated.div)`
  @media (min-width: 770px) {
    display: block;
    padding: 40px 25px;
    text-transform: uppercase;
    color: ghostwhite;

  }
  @media (min-width: 1400px) {
    padding: 40px 50px 1px 50px;
    color: ghostwhite;

  }
`

const styledLink = (text, link, i) => {
    const [on, toggle] = useState(false)

    const props = useSpring({
        config: { mass: 1, tension: 290, friction: 40 },
        transform: on ? ` scale(1.1)` : `scale(1.0)`,
    })

    if (link.match(/^\s?http(s?)/gi)) {
        return (
            <Anchor href={link} key={i} target="_blank" rel="noopener noreferrer">
                <Button
                        onMouseOver={() => toggle(true)}
                        onMouseLeave={() => toggle(false)}
                        style={props}
                    >
                    {text}
                </Button>
            </Anchor>
        )
    } else {
        return (
            <StyledLink to={link} key={i}>
            <Button
                onMouseOver={() => toggle(true)}
                onMouseLeave={() => toggle(false)}
                style={props}
            >
                {text}
            </Button>
            </StyledLink>
        )
    }

  
}

/**
* Navigation component
*
* The Navigation component takes an array of your Ghost
* navigation property that is fetched from the settings.
* It differentiates between absolute (external) and relative link (internal).
* You can pass it a custom class for your own styles, but it will always fallback
* to a `site-nav-item` class.
*
*/


const Navigation = ({ data }) => {
    const [on, toggle] = useState(false)
  
    const props = useSpring({
      config: { mass: 1, tension: 290, friction: 40 },
      transform: on ? ` scale(1.1)` : `scale(1.0)`,
    })
    return(
      <>
          <Nav>
              {data.map((navItem, i) => styledLink(navItem.label,navItem.url,i))}
              <StyledLink to={"https://www.facebook.com/Gabinet-Weterynaryjny-AS-652212578143318/"} key={"fb-12"}>
                <Button
                    onMouseOver={() => toggle(true)}
                    onMouseLeave={() => toggle(false)}
                    style={props}
                >
                    <FaFacebookF/>
                </Button>
              </StyledLink>
          </Nav>
      </>)
  }


Navigation.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
}

export default Navigation
