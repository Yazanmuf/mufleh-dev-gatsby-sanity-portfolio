import React from 'react'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Container from '../components/container'

import {responsiveTitle2, base} from '../components/typography.module.css'

const AboutPage = () => {
  return (
    <Layout>
      <SEO title='About' />
      <Container>
        <h1 className={responsiveTitle2}>About me</h1>
        <p className={base}>Hello, I'm a web developer passionate about front end</p>
      </Container>
    </Layout>
  )
}

export default AboutPage
