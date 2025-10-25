import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import MainPage from './components/MainPage'
import Animationblox from './components/Animationblox'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
              <Route index element={<MainPage/>}></Route>
              <Route path='/Main' element={<Animationblox/>}></Route>



          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
