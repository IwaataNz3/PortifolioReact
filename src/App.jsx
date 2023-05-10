import { useState } from 'react'
import { motion } from 'framer-motion' 
import Menu from './components/Menu'
import Main from './components/Main'
import Skills from './components/Skills'
  import Sobre from './components/Sobre'
  import Footer from './components/Footer'
import './index.css'

function App() {


  return (
    <>
    <body>
      <Menu />
      <Main />
      <Skills />
      <Sobre />
      <Footer />
      </body>
    </>
  )
}

export default App
