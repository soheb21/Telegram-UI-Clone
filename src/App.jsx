
import './App.css'
import Message from './components/Message'
import Home from './page/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/:id' element={<Message />} />
      </Routes>
    </Router>
  )
}

export default App
