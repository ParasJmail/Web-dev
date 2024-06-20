import { useState } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Landing } from './components/Landing';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div>
          <button onClick={() => {
            window.location.href = '/dashboard'
          }}>Landing Page</button>
          <button onClick={() => {
            window.location.href = '/landing'
          }}>Dashboard Page</button>
        </div>

        <BrowserRouter>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/landing' element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
