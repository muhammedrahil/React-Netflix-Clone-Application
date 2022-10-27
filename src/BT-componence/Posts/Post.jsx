import './Post.css'
import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import {API_KEY,Image } from '../../constence/constence'
import Youtube from 'react-youtube'

function Post(props) {
  const [post, setPost] = useState([])
  const [trailer,setMovie]  = useState('')
  useEffect(() => {
    axios.get(props.urls ? props.urls : null).then((responce) => {
      setPost(responce.data.results)
    })
  }, [])
  const opts = {
    height: '300',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  }
  const handleMovie = (id)=>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((responce)=>{
      setMovie(responce.data.results[0].key)
    })
    
  }
  return (
    <div className='row'>
      <h2 className='post-header'>{props.title}</h2>
      <div className='posters'>
        {
          post.map((items, key) =>
            <img onClick={ ()=> handleMovie(items.id)} className={props.isSmall ? 'smal-poster' : 'poster'} alt='poster' src={`${Image + items.backdrop_path}`} />
          )
        }
      </div>
   { trailer &&   <Youtube videoId={trailer} opts={opts} />}
    </div>
  )
}

export default Post
