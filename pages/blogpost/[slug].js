import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'


const slug = () => {
    const router=useRouter()
    const {slug}=router.query
    console.log(slug)
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1>{slug}</h1>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolorum ex facere necessitatibus reprehenderit minima qui tenetur corrupti, voluptatum cupiditate quo recusandae in consequuntur laudantium perferendis beatae quia maiores nobis dolorem, quas modi! Laudantium debitis corporis dicta saepe ut necessitatibus inventore deleniti enim eveniet similique. Cum voluptatum amet sint quis voluptate sit cupiditate dolorem aperiam, deserunt eos quas eius officiis? Porro dolorem, ad tenetur, animi voluptatem, praesentium incidunt magnam blanditiis consectetur aliquid nesciunt quasi laudantium maxime? Quam dolore a assumenda tempore! Odit, doloribus cumque nihil inventore corporis cum rem quia dolore. Cupiditate consequatur debitis ipsa atque officiis officia! Autem, fugit!</p>
      </main>
    </div>
  )
}

export default slug