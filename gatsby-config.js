module.exports = {
    siteMetadata: {
        title: "tgthr",
        description:
            "We solve digital and marketing challenges for mission-minded businesses. Let’s build a radically better future, together.",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sass",
        {
            // keep as first gatsby-source-filesystem plugin for gatsby image support
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/static/img`,
                name: "uploads",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/pages`,
                name: "pages",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/img`,
                name: "images",
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: "G-WRQRBRV6KD",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: true,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths: exclude: ["/preview/**", "/do-not-track/me/too/"],
                exclude: [],
                // Defers execution of google analytics script after page load
                defer: false,
                // Any additional optional fields
                sampleRate: 5,
                siteSpeedSampleRate: 10,
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /src[/]img/, // See below to configure properly
                },
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-relative-images",
                        options: {
                            name: "uploads",
                        },
                    },
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 2048,
                        },
                    },
                    {
                        resolve: "gatsby-remark-copy-linked-files",
                        options: {
                            destinationDir: "static",
                        },
                    },
                ],
            },
        },
        // `gatsby-plugin-mdx`,
        // {
        //     resolve: `gatsby-plugin-mdx`,
        //     options: {
        //         extensions: [".mdx", ".md"],
        //         // defaultLayouts: {
        //         //     // This entry template will switch the page template based on
        //         //     // a frontmatter value provided in the CMS, allowing users to
        //         //     // choose different template layouts.
        //         //     default: require.resolve(
        //         //         `./src/templates/cms-entry.template.js`,
        //         //     ),
        //         // },
        //     },
        // },
        {
            resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
            options: {
                develop: true, // Activates purging in npm run develop
                purgeOnly: ["/all.sass"], // applies purging only on the bulma css file
            },
        }, // must be after other CSS plugins
        "gatsby-plugin-netlify", // make sure to keep it last in the array
        {
            resolve: "gatsby-plugin-netlify-cms",
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`,
                customizeWebpackConfig: (config) => {
                    config.node = {
                        ...config.node,
                        fs: "empty",
                        child_process: "empty",
                        module: "empty",
                    };
                    return config;
                },
            },
        },
    ],
};
