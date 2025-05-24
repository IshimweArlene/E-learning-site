import { useState } from 'react'
import Login from './components/Login'

function App() {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <div>
      <Login />
    </div>
  )
}

export default App
