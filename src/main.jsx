import { createRoot } from 'react-dom/client'
import './input.css'

function App() {
  return (
    <h1 className="text-[20px] font-geist text-white text-center">
      Vex IQ Notebooker's extension
    </h1>
  )
}

createRoot(document.getElementById('root')).render(<App />)
