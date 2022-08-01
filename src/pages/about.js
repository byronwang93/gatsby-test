import React from 'react';
import Layout from '../components/Layout';
import { StaticImage, staticImage } from 'gatsby-plugin-image';
import { Link, graphql } from 'gatsby';
import RecipesList from '../components/RecipesList';

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  // const data = useStaticQuery(query);
  return (
    <Layout>
      <main className="page">
        <section class="about-page">
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>
              Taxidermy forage glossier letterpress herlokkm before they sold
            </p>
            <p>
              Taikayi tbliuc flexitari na jean shorts burcnh, aesthetic alisva,
              retro.
            </p>
            <Link
              className="btn"
              to="/contact"
            >
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring Salt in Bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section class="featured-recipes">
          <h5>look at this!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export default About;
