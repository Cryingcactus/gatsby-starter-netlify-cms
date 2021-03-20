import React, { useContext, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";
import { ThemeContext, ThemeContextProvider } from "../context/ThemeContext";
import Footer from "./Footer";
import Navbar from "./Navbar";
import useSiteMetadata from "./SiteMetadata";
import "./all.scss";

const TemplateWrapper = ({ children, uri, backgroundColor }) => {
    const { title, description } = useSiteMetadata();
    // const { dispatch } = useContext(ThemeContext);

    // useEffect(() => {
    //     dispatch({
    //         type: "logoColor",
    //         backgroundColor: backgroundColor.toLowerCase(),
    //     });
    // }, [backgroundColor]);

    const primaryColorMap = {
        "#ffffff": "#181925",
        "#f0ddf8": "#af4d98",
        "#f5e0e4": "#f85a3e",
        "#e2f3e9": "#09814a",
        "#d8fafe": "#1d4087",
        "#181925": "#ffffff",
        "#af4d98": "#f0ddf8",
        "#f85a3e": "#f5e0e4",
        "#09814a": "#e2f3e9",
        "#1d4087": "#d8fafe",
    };

    const ref = useRef(false);
    useEffect(() => {
        if (ref.current) {
            ref.current.style = `--logoColor: ${
                backgroundColor
                    ? primaryColorMap[backgroundColor.toLowerCase()]
                    : "#181925"
            }`;
        }
    }, [ref]);

    return (
        <div ref={ref}>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href={`${withPrefix("/")}img/apple-touch-icon.png`}
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix("/")}img/favicon-32x32.png`}
                    sizes="32x32"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix("/")}img/favicon-16x16.png`}
                    sizes="16x16"
                />

                <link
                    rel="mask-icon"
                    href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
                    color="#ff4400"
                />
                <meta name="theme-color" content="#fff" />

                <meta property="og:type" content="business.business" />
                <meta property="og:title" content={title} />
                <meta property="og:url" content="/" />
                <meta
                    property="og:image"
                    content={`${withPrefix("/")}img/og-image.jpg`}
                />
            </Helmet>
            <Navbar />
            <main>{children}</main>
            <Footer parallax={!(uri && uri.includes("/contact"))} />
        </div>
    );
};

const Layout = (props) => (
    <ThemeContextProvider>
        <TemplateWrapper {...props} />
    </ThemeContextProvider>
);

export default Layout;
