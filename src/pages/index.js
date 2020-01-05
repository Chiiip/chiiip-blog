import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Pedro Augusto Neves";

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Home" keywords={[`blog`, `gatsby`, `react`, `pedro`, `augusto`, `neves`]} />
        <h1>
          Em construção!
        </h1>
        <Link to="/blog/">
          <Button marginTop="35px">Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
