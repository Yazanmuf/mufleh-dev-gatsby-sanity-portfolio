import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'
import logo from '../images/logo.png'
import github from '../images/github-icon.svg'

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/'>
          <img src={logo} alt='mufleh.dev' style={{width: '250px'}} />
        </Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to='/about/'>About me</Link>
          </li>
          <li>
            <Link to='/projects/'>Projects</Link>
          </li>
          <li>
            <Link to='/contact/'>Contact</Link>
          </li>
          <a href='https://github.com/Yazanmuf'>
            <img src={github} />
          </a>

        </ul>
      </nav>
    </div>
  </div>
)

export default Header
