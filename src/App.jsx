import { useState } from 'react'
import Navbar from './components/Navbar'
import UserDetails from './components/UserDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <UserDetails />
    </>
  )
}

export default App
