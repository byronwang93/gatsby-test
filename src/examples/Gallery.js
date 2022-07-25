import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: { grayscale: true }
            width: 200
          )
        }
      }
    }
  }
`;

const Gallery = () => {
  const data = useStaticQuery(query);
  const nodes = data.allFile.nodes;
  return (
    <Wrapper>
      <h2>
        {nodes.map((image, index) => {
          return (
            <article key={index}>
              <p>Single Image</p>
            </article>
          );
        })}
      </h2>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Gallery;