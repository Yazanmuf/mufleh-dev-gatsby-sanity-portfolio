import React from 'react'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Container from '../components/container'

import {responsiveTitle3, small} from '../components/typography.module.css'

const ContactPage = () => {
  return (
    <Layout>
      <SEO title='Contact' />
      <Container>
        <h1 className={responsiveTitle3}>If you're interested in my work or for a job position please contact me:</h1>
        <h3>My email:</h3>
        <p>ymufleh@gmail.com</p>
      </Container>
    </Layout>
  )
}

export default ContactPage
