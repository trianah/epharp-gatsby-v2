import React from "react";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./all.sass";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Harpist Emmanuel Padilla Holguin" />
    <Navbar />
    <div className="l-content">{children}</div>
    <Footer />
    <div id="fb-root" />
  </div>
);

export default TemplateWrapper;
