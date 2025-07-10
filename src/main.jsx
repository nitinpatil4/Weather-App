import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Weatherapp from './weatherapp'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Weatherapp />
  </StrictMode>,
)
