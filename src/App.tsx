import React from 'react'
import {
  Route,
  BrowserRouter,
  Routes
} from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Hello from home!</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
