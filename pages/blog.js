import React from 'react'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'
const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
          <div className={styles.blogItem}>
           <Link href={'/blogpost/learn-javascript-in-2022'}>
              <h3>How to learn JavaScript in 2022?</h3>
           </Link>
           <p>JavaScript is the language used to design logic for the web.</p>
          </div>
          <div className={styles.blogItem}>
            <Link href={'/blogpost/learn-javascript-in-2022'}>
              <h3 >How to learn JavaScript in 2022?</h3>
           </Link>
           <p>JavaScript is the language used to design logic for the web.</p>
          </div>
          <div className={styles.blogItem}>
          <Link href={'/blogpost/learn-javascript-in-2022'}>
              <h3 >How to learn JavaScript in 2022?</h3>
           </Link>
           <p>JavaScript is the language used to design logic for the web.</p>
          </div>
    </main>
    </div>
  )
}

export default Blog