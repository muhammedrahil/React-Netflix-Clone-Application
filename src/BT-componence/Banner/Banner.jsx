
import React, { useEffect,useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY,Image } from '../../constence/constence'

export default function Banner() {

  const [movie,setMovie]=useState()
  
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}`).then((responce)=>{
        setMovie(responce.data.results[Math.floor(Math.random() * 21)])
    })
  },[])

  return (
    <div style={{ backgroundImage:`url(${movie ? Image+movie.backdrop_path : '' })` }}
      className='banner'>
      <div className='content' >
        <h1 className='title'>{movie ? movie.original_title ? movie.original_title:movie.original_name : ''}</h1>
        <div className='banner_buttons' >
          <button className='button' >Play</button>
          <button className='button' >My list</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : ''}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}
