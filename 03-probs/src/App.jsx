import React from 'react'
import Card from './components/Card'  
const App = () => {
  return (
    <div className='parent'>
     
   
    
    
      <Card user="Kundan yadav" age={19} img="https://images.unsplash.com/photo-1776231972021-49d6b6152156?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="prince" age={20} img="https://images.unsplash.com/photo-1778244305115-4dd2bf7c8e86?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    
    </div>
  )
}

export default App