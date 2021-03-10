import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Navbar from "../components/Navbar";
import "./all.scss";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import { ThemeContextProvider } from "../context/ThemeContext";

const TemplateWrapper = ({ children, uri, theme }) => {
    const { title, description } = useSiteMetadata();
    const { state, dispatch } = useContext(ThemeContext);

    useEffect(() => {
        dispatch({ type: "theme", theme: theme });
    }, [theme]);

    return (
        <div>
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
            <Navbar uri={uri} />
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
