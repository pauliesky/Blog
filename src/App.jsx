// import { useState } from 'react'

import './App.css'
import Blog from './Blog'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BlogContent from './BlogContent'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

    <BrowserRouter>
    <Routes>

      <Route path='/'   element={<Blog />}  />
      <Route path='/blog/:slug'   element={<BlogContent />}  />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
