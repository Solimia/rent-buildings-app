import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import MainPage from './components/MainPage'
import Animationblox from './components/Animationblox'
import Page from './components/Page'
import Page2 from './components/page2'
import LoginPage from './components/loginPage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<MainPage />}></Route>
            <Route path='/Main' element={<Animationblox />}></Route>
            <Route path='/page' element={<Page />}></Route>
            <Route path='/page2' element={<Page2 />}></Route>
            <Route path='/loginPage' element={<LoginPage />}></Route>
              <Route index element={<MainPage/>}></Route>
              <Route path='/page' element={<Page/>}></Route>
              <Route path='/Main' element={<Animationblox/>}></Route>
              <Route path='/page' element={<Page/>}></Route>
              <Route path='/page2' element={<Page2/>}></Route>


          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
