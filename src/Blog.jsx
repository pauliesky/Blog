// import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {URL} from './URL' 
import './Blog.css'


function Blog() {

const [posts, setPosts] =useState([])

useEffect(()=>{
axios.get(URL).then(res => { 
    console.log(res.data.data.posts)
    setPosts(res.data.data.posts)}
)


},[])

  return (
    <>
    
    {posts.map((post,index)=>{
    console.log(post.slug)
      return (
<>        
        <Link  to={`blog/${post.slug}`}  >
          <div key={index}>{post.title}</div>

        <div>{post.date}</div>
        </Link>

</>
        

      )

    })}
    
    </>
  )
}

export default Blog