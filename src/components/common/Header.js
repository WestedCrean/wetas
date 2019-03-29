import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Navigation } from ".";
import config from '../../utils/siteConfig'

const H = styled.header`
    background: #5e1096;
    background: -webkit-linear-gradient(to right, #4a1096, #ab44ff);
    background: linear-gradient(to right, #4a1096, #ab44ff);
`;

const Addenum = styled.div`
    color: ghostwhite;
    margin-top: 100px;
    & * {
        line-height: 0.3rem;
        font-family: "Karla", Helvetica, Arial,sans-serif;
        font-weight: 100;
    }

`;

const LogoMain = styled.div`
    width: 140px;
    margin: 0 auto;

    @media (min-width: 770px) {
        margin: 0;
        width: 200px;
    }
    background-color: ghostwhite;

    & img {
        width: 140px;

        @media (min-width: 770px) {
            width: initial;
        }
    }
`;

const Top = styled.div`
    display: flex;
    justify-content: space-around;
    width: calc(40vw - 20px);
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media (min-width: 770px) {
        justify-content: space-around;
    }
    @media (min-width: 1400px) {
        background-color: #ffffff00;
    }
`;

const Header = (props) => (
    <H>
        <Wrapper>
            <Top>
                <Link to="/">
                    <LogoMain>
                        {props.site.logo ? (
                            <img
                                src={props.site.logo}
                                alt={props.site.title}
                            />
                        ) : (
                            <Img
                                fixed={data.file.childImageSharp.fixed}
                                alt={props.site.title}
                            />
                        )}
                    </LogoMain>
                </Link>

                <Addenum>
                    <h2>lek wet Joanna Grabowska</h2>
                    <h4>Czynne pn-pt: 9-18 i sb: 9-12</h4>
                </Addenum>
            </Top>
            <Navigation data={props.site.navigation} navClass="site-nav-item" />
        </Wrapper>
    </H>
);

export default Header;
