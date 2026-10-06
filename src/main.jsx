import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Protfolio from './Protfolio'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Protfolio></Protfolio>
  </StrictMode>,
)
