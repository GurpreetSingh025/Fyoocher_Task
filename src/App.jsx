import { useState } from 'react'
import './App.css'
import Header from './components/header' ;
import MainContent from './components/MainContent';

function App() {
  return (
    <>
       <div className='cont'>
            <Header/>
            <MainContent/>
       </div>
    </>
  )
}

export default App 