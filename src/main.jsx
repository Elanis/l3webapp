import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
import CounterContextProvider from './context/CounterContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </BrowserRouter>
)
