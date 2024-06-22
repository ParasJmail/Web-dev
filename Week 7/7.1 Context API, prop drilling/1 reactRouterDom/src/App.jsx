import {lazy} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';
const Dashboard = lazy(() => import('./components/Dashboard'));
import { Landing } from './components/Landing';
import { Suspense } from 'react';

function App() {
  

  return (
    <>
      <div>
        

        <BrowserRouter>
          <Appbar />

          <Routes>
            <Route path='/dashboard' element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
            <Route path='/landing' element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
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
