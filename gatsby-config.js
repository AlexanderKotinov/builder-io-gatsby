const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Builder.io`,
    siteUrl: `https://cute-panda-364dfe.netlify.app/`
  },
  plugins: [
    "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: '@builder.io/gatsby',
    options: {
      publicAPIKey: '9d45f4226f17495a9222c2b8507d4420',
      templates: {
        // Render every `page` model as a new page using the
        // src/templates/page.jsx template based on the URL provided in Builder.io
        page: path.resolve('src/templates/page.jsx'),
      },
    },
  }]
};
