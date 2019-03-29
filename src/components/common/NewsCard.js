import React, { useState } from "react"
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import { Tags } from '@tryghost/helpers-gatsby'
import styled from "styled-components"
import { useSpring, animated } from 'react-spring'

const Card = styled.div`
  display:  block;
  border: 2px solid #3b394f00;
  transition: all 0.4s ease-out;
  border-radius: 5px;
  position: relative;
  background-color: #FFFFFF;
  min-height: 380px;

  & p {
      margin: 20px;
      margin-top: 30px;
      font-family: "Karla","Source Sans Pro", sans-serif;
      font-size: 1.2em;
  }
  

  &:hover {
        border: 2px solid #5e35b1;
    }

    @media (min-width: 1150px) {
        width: 380px;
    }


`;

const CardHeader = styled.h1`
    color: #3b394f;
    margin: 20px;
    font-size: 2em;
    font-weight: 200;
    font-family: -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
`;

const CardDate = styled.span`
    margin: 20px;
    margin-bottom: 10px;
    color: #5d5d5d;
    font-family: "Nunito","Source Sans Pro", sans-serif;
`;

const H = styled.h3`
    text-decoration: none;
    color: initial;
    transition: all 0.2s ease;
    

    &:hover {
        color: #5e35b1;
    }
`;

const BlockLink = styled(Link)`
    text-decoration: none;
    color: initial;
    height: 100%;
    margin: 0 10px;
`;

function truncate(textString) {
    let truncated = textString
    truncated = truncated.split("")
    truncated = truncated.slice(0,150)
    truncated = truncated.join("")
    truncated += " ..."
    return truncated;
}

const NewsCard = ({ post }) => {

    const url = `/${post.slug}/`;


    return(
            <BlockLink to={url}>
                <Card>
                    <CardHeader>{post.title}</CardHeader>
                    <CardDate>{post.date}</CardDate>
                    <p>{truncate(post.excerpt)}</p>
                    {post.tags && <div className="post-card-tags"> <Tags post={post} visibility="public" autolink={false} /></div>}
                </Card>
            </BlockLink>
        )
}


NewsCard.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}
  
  export default NewsCard