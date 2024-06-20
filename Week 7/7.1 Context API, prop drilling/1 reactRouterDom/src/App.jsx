import { useState } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Landing } from './components/Landing';

function App() {
  

  return (
    <>
      <div>
        

        <BrowserRouter>
          <Appbar />

          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/landing' element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

function Appbar(){

  const navigate = useNavigate();
  return  (
    <div>
      <button onClick={() => {
        navigate('/landing')
      }}>Landing Page</button>
      <button onClick={() => {
        navigate('/dashboard')
      }}>Dashboard Page</button>
    </div>
  )
}

export default App
