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
  const [selectedPiece, setSelectedPiece] = useState(null)
  const [search,setSearch] = useState('')
  useEffect(()=>{
    fetch('./parts/catalog.json')
      .then(response => response.json())
      .then(data => setPieces(data.components))
    .catch(error => console.error(error))
  },[])

  const filteredPieces = pieces.filter(piece =>
    piece.label.toLowerCase().includes(search.trim().toLowerCase())
  )
  return (
    <div className="grid">
       

      
      <Field className="w-[93%] mx-auto gap-1 mt-[5px]">
      <FieldLabel htmlFor="inline-start-input" className="text-[23px] font-geist text-white font-semibold">VEX IQ Library</FieldLabel>
      
      <InputGroup className="h-[37px] bg-[#1B1C22]">
        
        <InputGroupInput id="inline-start-input" placeholder="Search for parts" className="w-[93%] h-full pt-[3px] pb-[5px]" value={search} onChange={event=>setSearch(event.target.value)} />
        <InputGroupAddon align="inline-start">
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
    </Field>

    {!selectedPiece && (
      <div className="grid grid-cols-2 gap-3 w-[93%] mx-auto mt-4">
        
        {filteredPieces.map(piece => (
        <PieceCard key = {piece.folder} onOpen={()=> setSelectedPiece(piece)}name={piece.label} cover={'./parts/' + piece.cover.path} imageCount ={piece.images.length}/>
        ))}
      </div>
    )}
        {/* <p>{selectedPiece?.label}</p> */}

        {selectedPiece && (
      <div className="w-[93%] mx-auto mt-4">
        <button type="button" onClick={() => setSelectedPiece(null)}>
          ← All pieces
        </button>

        <h2>{selectedPiece.label}</h2>

        <div className="grid grid-cols-2 gap-3">
          {selectedPiece.images.map(image => (
            <div key ={image.path} className="h-24 flex items-center justify-center">
            <img
              key={image.path}
              src={'./parts/' + image.path}
              alt={selectedPiece.label}
              // className="w-full h-24 object-contain"
              className="w-auto h-auto max-w-full max-h-full object-contain"
              onDragStart = {event => {
                event.dataTransfer.setDragImage(event.currentTarget, 0, 0)
              }}
            />
            </div>
          ))}
        </div>
      </div>
    )}

    </div>
      
   
  )
}

createRoot(document.getElementById('root')).render(<App />)
