import * as React from 'react';
import Layout from "../components/layout";
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';


function IndexPage() {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
        alt="Group of tasty looking fresh vegetables"
        src="../images/veggies.jpg"
       />
      </Layout>
    </main>
  )
}

export function Head() {
  return (<Seo title="Home Page" />)
}

export default IndexPage