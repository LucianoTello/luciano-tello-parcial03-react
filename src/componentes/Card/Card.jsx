import React from 'react';

function Card({ character, onCardClick }) {
  const handleClick = () => {

    onCardClick(character.id);
    //console.log(character.id);
    
  };

  return (
    <div className="character-card" onClick={handleClick}>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
    </div>
  );
}

export default Card;

/*
    <div className="character-card">
    <img src={character.image} alt={character.name} />
    <h2>{character.name}</h2>
  </div>
 */