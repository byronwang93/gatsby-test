import React from 'react';
import { graphql } from 'gatsby';
const Testing = (props) => {
  console.log(props);
  return (
    <div>
      <h2>testing</h2>
    </div>
  );
};

export const data = graphql`
  query FirstQuery {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`;
export default Testing;
