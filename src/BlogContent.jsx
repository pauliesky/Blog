// import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import {URL} from './URL'

function BlogContent() {
    const {slug} = useParams()

const [blogContent, setBlogContent] =useState({})
    const fetchDetails = async ()=>{

        const res = await axios.get(`${URL}/${slug}`)
setBlogContent(res.data.data)

    }

    useEffect(()=>{
        fetchDetails()

    },[])

  return (
    <div>
<div>{blogContent.title}</div>
    <div   dangerouslySetInnerHTML={{__html:blogContent.content}} 
    />
    </div>
  
  )
}

export default BlogContent