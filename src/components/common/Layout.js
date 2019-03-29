import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from "styled-components"
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { slide as Menu } from "react-burger-menu"


import Header from './Header'
import { Navigation } from '.'
import Footer from './Footer'
import SideHelper from './SideHelper'
import config from '../../utils/siteConfig'

// Styles
import "../../styles/app.css"
import "../../styles/sidebar.css"


const HomeWrapper = styled.main`
    margin: 0 auto;
    padding: 0;
    padding-top: 0;   
`;

const PageWrapper = styled.main`
    width: 100%;
    max-width: 1100px;
    margin: 10vh auto;
    min-height: 50vh;


    & h1 {
        font-size: 2.7em;
        margin: 0.67em 0;
        font-weight: 100;
        font-family: -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    }

    & p {
        font-size: 1.2em;
        font-family: "Karla","Source Sans Pro", sans-serif;
    }

    & a {
        font-family: "Karla","Source Sans Pro", sans-serif !important;
        text-decoration: none;
        font-weight: 500;
        color: #5e1096;
        margin-bottom: 1.45rem;
    }

    & > * {
        font-family: "Karla","Source Sans Pro", sans-serif !important;
        margin-bottom: 1.45rem;
    }
`;


const M = styled(Menu)`
  display: block;
    @media (min-width: 771px) {
      display: none;
      & * {
        display: none;
      }
    }
`;

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node
    const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}` : null

    return (
    <>
        <Helmet>
            <html lang={site.lang} />
            <body className={bodyClass} />
        </Helmet>
        <div id="outer-container">
            <div>
            <M pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
                <Link className="menu-item" to={"/"}>Strona główna</Link>
                <Link className="menu-item" to={"/aktualnosci"}>Aktualności</Link>
                <Link className="menu-item" to={"/o-mnie"}>Zespół</Link>
                <Link className="menu-item" to={"/uslugi"}>Usługi</Link>
                <Link className="menu-item" to={"/kontakt-i-dojazd"}>Kontakt i dojazd</Link>
            </M>
            </div>
            {/* The main header section on top of the screen */}
            <div id="page-wrap">
            <Header site={site} facebookUrl={facebookUrl}/>
            <SideHelper/>
            {/* All the main content gets inserted here, index.js, post.js */}
            { isHome ? <HomeWrapper>{children}</HomeWrapper> : <PageWrapper>{children}</PageWrapper> }

            <Footer title={site.title}/>
            </div>
        </div>
    </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: {eq: "ghost-icon.png"}) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery
