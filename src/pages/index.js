import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Do you hate Scrabble?</h1>
    <h2>Boo boop boop</h2>
    <p>Welcome to your new Scrabble site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Go to page 2</Link>
  </Layout>
)

export default IndexPage
