import React from 'react'

const PieceCard = ({name,cover,imageCount}) => {
  return (
    <div>
      <img src={cover} alt="image cover" className="w-full h-24 object-contain" />
      <h3>{name}</h3>
      <p>{imageCount} images</p>
    </div>
  )
}

export default PieceCard
