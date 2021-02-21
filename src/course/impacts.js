/** @jsx jsx **/
import { graphql } from 'gatsby'
import { jsx } from 'theme-ui'

import Image from 'gatsby-image'

import Unit from '../components/unit'

const Impacts = ({ data }) => {
  return (
    <Unit {...data.markdownRemark}>
      <Image
        fluid={{ ...data.stumpsImage.fluid }}
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100vw',
        }}
      />
    </Unit>
  )
}

export default Impacts

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      ...Unit
    }
    stumpsImage: imageSharp(fluid: { originalName: { eq: "Stumps.png" } }) {
      fluid(maxWidth: 2560, traceSVG: {}) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`
