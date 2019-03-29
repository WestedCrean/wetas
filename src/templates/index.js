import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "styled-components";
import {
    Layout,
    NewsCard,
    Pagination,
    Slider,
    InfoButtons
} from "../components/common";
import { MetaData } from "../components/common/meta";

/* Styles */

const MainPage = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 10vh auto;
`;

const SectionHeading = styled.h2`
    font-size: 2.5em;
    text-align: center;
    position: relative;
    padding: 10px;
    color: #4a1096;

    &:after {
        content: "";
        display: block;
        position: absolute;
        height: 2px;
        margin: 0;
        bottom: -10px;
        margin: 0 auto;
        left: 0;
        right: 0;
        width: 15vw;
        background-color: #4a148c;
        transition: all ease 0.4s;
    }

    &:hover:after {
        width: 20vw;
    }
`;

const Paragraph = styled.p`
    font-family: "Karla", Roboto, sans-serif;
    margin: 40px;
    font-size: 1.4em;
`;

const BlogSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    margin: 20px auto;
    @media (min-width: 1150px) {
        flex-direction: row;
    }
`;

/**
 * Main index page (home page)
 *
 * Loads all posts from Ghost and uses pagination to navigate through them.
 * The number of posts that should appear per page can be setup
 * in /utils/siteConfig.js under `postsPerPage`.
 *
 */
const Index = ({ data, location, pageContext }) => {
    const posts = data.allGhostPost.edges;

    return (
        <>
            <MetaData location={location} />

            <Layout isHome={true}>
                <Slider />
                <InfoButtons />
                <MainPage>
                    <SectionHeading>Oferta</SectionHeading>
                    <Paragraph>
                        <ul>
                            <li>Lecznictwo zwierząt towarzyszących.</li>
                            <li>
                                Badania diagnostyczne wykonywane na miejscu lub
                                we współpracujących laboratoriach.
                            </li>
                            <li>
                                W celu zapewnienia kompleksowej pomocy gabinet
                                współpracuje również z lekarzami weterynarii
                                specjalistami różnych dziedzin.
                            </li>
                            <li>Czipowanie, wydawanie paszportów</li>
                            <li>
                                Obserwacja w kierunku wścieklizny we współpracy
                                z Wojewódzkim Inspektoratem Weterynarii
                            </li>
                        </ul>
                    </Paragraph>
                    <SectionHeading>Najnowsze wpisy</SectionHeading>
                    <BlogSection>
                        {posts.slice(0, 3).map(({ node }) => (
                            <NewsCard key={node.id} post={node} />
                        ))}
                    </BlogSection>
                </MainPage>
            </Layout>
        </>
    );
};

Index.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};

export default Index;

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
    query GhostPostQuery($limit: Int!, $skip: Int!) {
        allGhostPost(
            sort: { order: DESC, fields: [published_at] }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    ...GhostPostFields
                }
            }
        }
    }
`;
