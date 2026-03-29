import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import ApiFatch from './pages/ApiFatch.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/apifatch" element={<ApiFatch />} />    
    <Route path="/customHook" element={<ApiFatch />} />    

    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
