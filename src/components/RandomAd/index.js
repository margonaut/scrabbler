import { graphql, useStaticQuery } from 'gatsby';

import Img from 'gatsby-image';
import React from 'react';
import styles from './styles.module.css';

const adImages = ['tintinAd.jpg', 'weldingAd.jpg'];


const StarterComponent = () => {
  const randomNum = Math.floor(Math.random() * 1);
  const imageFile = adImages[randomNum];

  // Problem: We can't just use the image file string in this graphql query
  // we need to set up a query fragment that includes this variable
  // and pass the random imageFile to that fragment
  // let it be known that I think this is stupid

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className={styles.container}>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
    </div>
  );
};

export default StarterComponent;
