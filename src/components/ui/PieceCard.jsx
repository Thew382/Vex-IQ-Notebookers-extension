import React from 'react'

const PieceCard = ({name,cover,imageCount,onOpen}) => {

    return (
    <button type="button" onClick={onOpen} className="min-w-0 rounded-xl border border-[#303139] bg-[#1B1C22] p-3 text-left transition-colors hover:bg-[#252630]">
      <img src={cover} alt="image cover" className="w-full h-24 object-contain" />
      <h3 className="mt-2 text-sm font-medium break-words">{name}</h3>
      <p className="mt-1 text-xs text-muted-foreground">{imageCount} images</p>
    </button>
    
  )
}

export default PieceCard
