import React from 'react';
import Layout from '../components/Layout';
import { StaticImage, staticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const About = () => {
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
      </main>
    </Layout>
  );
};

export default About;
