import React from 'react'
import styles from './contact-form.module.css'

const ContactForm = () => {
  return (

    <form className={styles.form} name='contact' method='post' data-netlify='true' data-netlify-honeypot='bot-field'>
      <p>
        <label>Your Name: <input className={styles.inputText} type='text' name='name' /></label>
      </p>
      <p>
        <label>Your Email: <input className={styles.inputText} type='email' name='email' /></label>
      </p>
      <p>
        <label>Your Role: <select className={styles.selectInput} name='role[]' >
          <option value='leader'>Looking to hire</option>
          <option value='follower'>Looking for freelance work</option>
        </select></label>
      </p>
      <p>
        <label>Message: <textarea className={styles.inputText} name='message' /></label>
      </p>
      <p>
        <button className={styles.submitButton} type='submit'>Send</button>
      </p>
    </form>

  )
}

export default ContactForm
