import React,{useState} from 'react'

import styles from '../../styles/BlogPost.module.css'


const slug = (props) => {

  const [blog, setblog] = useState(props.myBlogData)
  console.log(blog)
  return (
    
    <div className={styles.container}>
      <main className={styles.main}>
      <h1>{blog && blog.title}</h1>
      <hr />
      <p>{blog && blog.content}</p>
      </main>
    </div>
  )
}

export async function getServerSideProps(context){
  const {slug}=context.query
  let data=await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
  let myBlogData=await data.json()
  console.log(myBlogData)
  return{
    props:{myBlogData}
  }

}
export default slug