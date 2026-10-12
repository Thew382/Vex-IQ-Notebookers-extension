import { createRoot } from 'react-dom/client'
// Loads Tailwind utilities and the shadcn theme for every UI component.
import './input.css'
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { SearchIcon } from 'lucide-react'

function App() {
  return (
    <div className="grid">
       <h1 className="text-[20px] font-geist text-white font-semibold ml-[3.5%] mt-[3.5%]">
         VEX IQ Library
      </h1>
      <Input placeholder="Search for pieces" className="justify-self-center w-[93%] mt-[3.5px]" />
      
    
    </div>
   
  )
}

createRoot(document.getElementById('root')).render(<App />)
