import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Front.jsx'
import Nav from './Components/NavBar.jsx'
import Content from './content.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Content/>    
  </StrictMode>,
)
