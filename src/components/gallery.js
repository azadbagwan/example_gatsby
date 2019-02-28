import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const SINGLE_IMAGE = graphql`
  query {
    img1: file(relativePath: { eq: "gym_2.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "gym_3.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "gym_4.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default function gallery() {
  return (
    <StaticQuery
      query={SINGLE_IMAGE}
      render={data => {
        const img1 = data.img1.childImageSharp.fluid
        const img2 = data.img2.childImageSharp.fluid
        const img3 = data.img3.childImageSharp.fluid
        return (
          <div>
            <GalleryWrapper>
              <div className="item item-1">
                <Img fluid={img1} />
                <p className="info">The main gym pic</p>
              </div>
              <div className="item item-2">
                <Img fluid={img2} />
                <p className="info">The main gym pic</p>
              </div>
              <div className="item item-3">
                <Img fluid={img3} />
                <p className="info">The main gym pic</p>
              </div>
            </GalleryWrapper>
          </div>
        )
      }}
    />
  )
}
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
    grid-template-areas:
      "one one two two"
      "one one three three";
    .item-1 {
      grid-area: one;
    }
    .item-2 {
      grid-area: two;
    }
    .item-3 {
      grid-area: three;
    }

    grid-column-gap: 1rem;
  }
`
