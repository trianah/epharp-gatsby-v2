import React from "react";
import Helmet from "react-helmet";

import favicon16 from "../favicon/favicon-16x16.png";
import favicon32 from "../favicon/favicon-32x32.png";
import favicon96 from "../favicon/favicon-96x96.png";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./all.sass";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Harpist Emmanuel Padilla Holguin"
      link={[
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: `${favicon16}`
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: `${favicon32}`
        },
        { rel: "shortcut icon", type: "image/png", href: `${favicon96}` }
      ]}
    />
    <Navbar />
    <div className="l-content">{children}</div>
    <Footer />
    <div id="fb-root" />
  </div>
);

export default TemplateWrapper;
