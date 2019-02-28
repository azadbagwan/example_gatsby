import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import Imagem from "../components/imagemain.js"
import SEO from "../components/seo"
import Gallery from "../components/gallery"
import styled from "styled-components"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `gatsby`,
        `application`,
        `react`,
        "gym",
        "workout",
        "pune gyms",
      ]}
    />

    <GalleryWrapper>
      <div className="item item-1">
        <Imagem />
      </div>
      <div className="item item-2">
        <p>The main gym info</p>
      </div>
    </GalleryWrapper>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Gallery />
  </Layout>
)
const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  .item {
    position: relative;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    background: orange;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 992px) {
    .gatsby-image-wrapper {
      height: 100%;
    }
    grid-template-areas: "one one one two";
    .item-1 {
      grid-area: one;
    }
    .item-2 {
      grid-area: two;
    }

    grid-column-gap: 1rem;
  }
`

export default IndexPage
