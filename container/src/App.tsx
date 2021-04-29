import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header'
import Marketing from './components/Marketing';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Marketing />
    </BrowserRouter>
  )
}

export default App

