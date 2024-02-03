const path = require("path");
const siteMetadata = {
  title: "Obsidian Template for Gatsby Theme Primer Wiki",
  shortName: "Wiki",
  description:
    "Another Obsidian template that use gatsby-theme-primer-wiki, Welcome to your new Obsidian Knowledge Base!",
  twitterName: "theowenyoung",
  imageUrl: "/graph-visualisation.jpg",
  siteUrl: "https://dst03106.github.io",
};
module.exports = {
  siteMetadata,
  pathPrefix: "/",
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/..`,
        ignore: [`**/\.*/**/*`],
      },
    },
    {
      resolve: "gatsby-theme-primer-wiki",
      options: {
        nav: [
          {
            title: "Github",
            url: "https://github.com/theowenyoung/obsidian-template-gatsby-theme-primer-wiki/",
          },
          {
            title: "Twitter",
            url: "https://twitter.com/theowenyoung",
          },
        ],
        editUrl:
          "https://github.com/theowenyoung/obsidian-template-gatsby-theme-primer-wiki/tree/main/",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortName,
        start_url: "/",
        background_color: `#f7f0eb`,
        display: `standalone`,
        icon: path.resolve(__dirname, "./static/logo.png"),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [],
      },
    },
  ],
};