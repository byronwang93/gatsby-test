/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Simply Recipes',
    description: 'Nice and clean recipes site',
    author: '@johnsmilga',
    person: {
      name: 'john',
      age: 32,
    },
    simpleData: ['item 1', 'item 2'],
    complexData: [
      {
        name: 'john',
        age: 32,
      },
      {
        name: 'susan',
        age: 21,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images

    // can have multiple instances of the code below
    {
      resolve: `gatsby-source-filesystem`, //name of plugin
      options: {
        name: `images`, //your name for the resource you're using (can be anything)
        path: `${__dirname}/src/assets/images`, //path you provide
      }, // __dirname sets up absolute directory to where file is sitting
    }, // we can only query into images directory
  ],
};
