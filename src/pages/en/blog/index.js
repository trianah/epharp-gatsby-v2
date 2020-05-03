import React from 'react'

import Layout from '../../../components/Layout'
import PageHeading from "../../../components/PageHeading";
import BlogRoll from '../../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <main>
        <PageHeading title='Blog' />
          <section className="section">
            <div className="container">
              <div className="zzzcontent">
                <BlogRoll />
              </div>
            </div>
          </section>
        </main>
      </Layout>
    )
  }
}