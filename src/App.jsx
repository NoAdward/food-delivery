import { useState } from 'react'

import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Header from './components/UI/Header/Header'
import Home from './views/Home/Home'
import AboutMe from './views/AboutMe/AboutMe';
import Project from './views/MyProjects/Project'



function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/aboutMe' element={<AboutMe />} /> */}
      </Routes>
      <AboutMe />
      <Project />
    </>
  )
}

export default App
