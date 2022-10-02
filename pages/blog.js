import React, { useEffect,useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'
const Blog = () => {
  const [blog, setblog] = useState([])
  useEffect(()=>{
    console.log("usefext")
    fetch('http://localhost:3000/api/blogs')
    .then((a)=>{return a.json()}).then((parsed)=>{
      setblog(parsed)
    })
  },[])
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
          {blog.map((newitem)=>(
            <div key={newitem.slug} className={styles.blogItem}>
            <Link href={`/blogpost/${newitem.slug}`}>
               <h3>{newitem.title}</h3>
            </Link>
            <p className={styles.blogitemP}>{newitem.content}</p>
           </div>
          ))}
          
    </main>
    </div>
  )
}

export default Blog