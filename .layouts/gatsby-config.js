const path = require("path");
const pathPrefix = "/";
const siteMetadata = {
  title: "Welcome to my place!",
  shortName: "Wiki",
  description:
    "😊",
  twitterName: "dst03106",
  imageUrl: "/graph-visualisation.jpg",
  siteUrl: "https://dst03106.github.io/",
};
module.exports = {
  siteMetadata,
  pathPrefix,
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
        sidebarDepth:0,
        nav: [
          {
            title: "Github",
            url: "https://dst03106.github.io/",
          },
          {
            title: "Twitter",
            url: "https://twitter.com/dst03106",
          },
        ],
        editUrl:
          "https://github.com/dst03106/dst03106.github.io/${contentFolder}/",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortName,
        start_url: pathPrefix,
        background_color: `#f7f0eb`,
        display: `standalone`,
        icon: path.resolve(__dirname, "./static/logo.png"),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
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
