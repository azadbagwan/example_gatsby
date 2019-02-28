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
    <h1>Ak's Fitness Club</h1>
    <p>
      Ak's Fitness Club is one of the best fitness club in pune.
      <br />
      We are dedicated group of Qualified professioals with passion for helpinf
      every one achieve there fitness goals.
    </p>
    <p>
      Ak's fitness club is most affordable place for passionate people where you
      will be around people who love to help. <br />
      we provide wide range of equipements and machines for you to use. with our
      experienced trainers everyone gets the guidance and traininig they need,
      <br />
      After all Gym is not a social club for just the ones who are already fit,
      but a place for all to train.
    </p>

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
