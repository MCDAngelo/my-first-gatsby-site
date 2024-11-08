// Step 1: Import React
import * as React from 'react';
import Layout from "../components/layout";
import Seo from '../components/seo';

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About me">
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      </Layout>
    </main>
  )
}

export function Head() {
  return (<Seo title="About" />)
  }
  
// Step 3: Export your component
export default AboutPage