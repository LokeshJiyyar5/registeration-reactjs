import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './Register'
import Edit from './Edit'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/Edit' element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
