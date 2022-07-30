import React from 'react';
import AllRecipes from '../components/AllRecipes';
import Layout from '../components/Layout';

const Recipes = () => {
  return (
    <Layout>
      <main class="page">
        <AllRecipes />
      </main>
    </Layout>
  );
};

export default Recipes;
