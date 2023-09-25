import React from 'react'
import './CarDetail.css';

function CardDetail({ character }) {
  return (
    <div className="character-detail-card">
    <img src={character.image} alt={character.name} />
    <h2>{character.name}</h2>
    <p>Género: {character.gender}</p>
    <p>Especie: {character.species}</p>
    <p>Origen: {character.origin.name}</p>
  </div>
  )
}

export default CardDetail