import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Gallery from '../examples/Gallery';
const Testing = (props) => {
  console.log(props);
  return (
    <Layout>
      <main className="page">
        <Gallery />
      </main>
    </Layout>
  );
};

export default Testing;
