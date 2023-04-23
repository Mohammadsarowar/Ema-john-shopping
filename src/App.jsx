import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'
import Cart from './components/Cart/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Cart></Cart>
     
    </div>
  )
}

export default App
