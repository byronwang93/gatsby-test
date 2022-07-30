import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import AllRecipes from '../components/AllRecipes';

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header class="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div class="hero-container">
            <div class="hero-text">
              <h1>Simply Recipes</h1>
              <h4>No fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  );
}
