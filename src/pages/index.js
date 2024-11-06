// Step 1: Import React
import * as React from 'react';
import Layout from "../components/layout";
import { StaticImage } from 'gatsby-plugin-image'


// Step 2: Define your component
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

// You'll learn about this in the next task, just copy it for now
// export const Head = () => <title>Home Page</title>

export function Head() {
  return (<title>Home Page</title>)
}

// Step 3: Export your component
export default IndexPage