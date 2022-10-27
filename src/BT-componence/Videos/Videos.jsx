import '../Posts/Post.css'

import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import Youtube from 'react-youtube'

function Video(props) {
  const [video, setVidoes] = useState([])
  useEffect(() => {
    axios.get(props.urls ? props.urls : null).then((responce) => {
      console.log(responce.data);
      setVidoes(responce.data.results)
    })
  }, [])

  const opts = {
    height: '200',
    width: '250',
    playerVars: {
      autoplay: 1,
    }
  }
  return (
    <div className='row'>
      <h2 className='post-header'>{props.title}</h2>
      <div className='posters'>
        {
          video.map((items, key) =>
          <Youtube videoId="2g811Eo7K8U" opts={opts} />
          )
        }
      </div>
      
    </div>
  )
}

export default Video
