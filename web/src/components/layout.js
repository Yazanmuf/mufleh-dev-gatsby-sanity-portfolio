import React from 'react'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          © {new Date().getFullYear()} <p>Yazan Al-Mufleh</p>
        </div>
        <div className={styles.socialMediaWrapper}>
          <a> <i className='fab fa-github' /></a>
          <i className='fas fa-instagram' />
        </div>
      </div>
    </footer>
  </>
)

export default Layout
