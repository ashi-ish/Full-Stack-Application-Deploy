import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch('http://localhost:8080/api/message')
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message)
      })
  })

  return (
    <>
      <h1>Hello Full Stack App Deployment</h1>
      <h2>data: {message}</h2>
    </>
  )
}

export default App
