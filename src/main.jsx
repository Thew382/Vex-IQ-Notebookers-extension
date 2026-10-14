import { createRoot } from 'react-dom/client'
import PieceCard from './components/ui/PieceCard'
import './input.css'
import { Input } from "@/components/ui/input"
import { useEffect, useState } from 'react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

import {
  Field,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field"

import { SearchIcon } from 'lucide-react'

function App() {
  const [pieces, setPieces] = useState([])
  useEffect(()=>{
    fetch('./parts/catalog.json')
      .then(response => response.json())
      .then(data => setPieces(data.components))
    .catch(error => console.error(error))
  },[])
  return (
    <div className="grid">
       

      
      <Field className="w-[93%] mx-auto gap-1 mt-[5px]">
      <FieldLabel htmlFor="inline-start-input" className="text-[23px] font-geist text-white font-semibold">VEX IQ Library</FieldLabel>
      
      <InputGroup className="h-[37px] bg-[#1B1C22]">
        
        <InputGroupInput id="inline-start-input" placeholder="Search for parts" className="w-[93%] h-full pt-[3px] pb-[5px]" />
        <InputGroupAddon align="inline-start">
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
      <div className="grid grid-cols-2 gap-3 w-[93%] mx-auto mt-4">
        {pieces.map(piece => (
        <PieceCard name={piece.label} cover={'./parts/' + piece.cover.path} imageCount ={piece.images.length}/>
        ))}
      </div>


    </div>
      
   
  )
}

createRoot(document.getElementById('root')).render(<App />)
