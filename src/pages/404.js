import React from "react";
import PageHeading from "../components/PageHeading";
import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <main>
      <PageHeading title="PAGE NOT FOUND" />
      <div className="site-gutters site-gutters--offset-header site-gutters--push-footer">
        <div className="c-404-message">
          <p>The page requested doesn't exist.</p>
          <p>
            Go to the{" "}
            <a href="/" className="styled-link">
              homepage.
            </a>
          </p>
        </div>
      </div>
    </main>
  </Layout>
);

export default NotFoundPage;
