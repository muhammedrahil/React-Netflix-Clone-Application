import React, { Component } from 'react'
// import Navbar from './Componence/Navbar/Navbar'
import Banner from './BT-componence/Banner/Banner'
import Navbar from './BT-componence/Navbar/Navbar'
import Post from './BT-componence/Posts/Post'
import './App.css'
import {orginals,actions} from './uls'
import Video from './BT-componence/Videos/Videos'
export class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar/>
        <Banner/>
        <Post urls={orginals} title='Netflix Orginal' />
        <Post urls={actions} title='Actions' isSmall />
        <Post urls={actions} title='Actions' isSmall />

      </div>
    )
  }
}

export default App
