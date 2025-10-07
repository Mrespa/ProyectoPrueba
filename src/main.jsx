import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './components/App.jsx'
import { GlobalContext, GolbalProvider } from '../context/GlobalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GolbalProvider>
      <App />
    </GolbalProvider>
  </StrictMode>,
)
