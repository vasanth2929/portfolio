import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, HashRouter } from "react-router";

import './index.css'
import App from './App.tsx'
import ResumeDocument from './Resume.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter  >
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/resume" element={<ResumeDocument />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
