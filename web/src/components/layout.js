import React from 'react'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'
import github from '../images/github-icon.svg'

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>

          <div className={styles.socialMediaWrapper}>
            © {new Date().getFullYear()} Yazan Al-Mufleh
            <a href='https://github.com/Yazanmuf'>
              <img src={github} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </>
)

export default Layout
