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

import {
  Field,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field"

import { SearchIcon } from 'lucide-react'

function App() {
  return (
    <div className="grid">
       {/* <h1 className="text-[20px] font-geist text-white font-semibold ml-[3.5%] mt-[3.5%]">
         VEX IQ Library
      </h1> */}

      {/* <SearchIcon/>
      <Input placeholder="Search for pieces" className="justify-self-center w-[93%] mt-[3.5px]" /> */}
      <Field className="w-[93%] mx-auto gap-1 mt-[5px]">
      <FieldLabel htmlFor="inline-start-input" className="text-[23px] font-geist text-white font-semibold">VEX IQ Library</FieldLabel>
      
      <InputGroup className="h-[37px]">
        
        <InputGroupInput id="inline-start-input" placeholder="Search for parts" className="w-[93%] h-full pt-[3px] pb-[5px]" />
        <InputGroupAddon align="inline-start">
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
      
      
    
    </div>
   
  )
}

createRoot(document.getElementById('root')).render(<App />)
