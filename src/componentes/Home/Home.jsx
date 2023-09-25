/*****************************HOME VIEJO FUNCIONANDO********************************/

import React, { useEffect, useState } from 'react';
import './Home.css';
import Api from '../Api/Api';
import ApiDetail from '../Api/ApiDetail';
import Card from '../Card/Card';
import CardDetail from '../Card/CardDetail';

function Home() {

  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [characterDetail, setCharacterDetail] = useState(null);
  
  const updateCharacters = (data) => {
    setCharacters(data);
  };

  const handleCardClick = (characterId) => {
    setSelectedCharacter(characterId);
  };

  const handleDetailLoaded = (detail) => {
    setCharacterDetail(detail);
  };

  return (  
    <div className="Home">
      <Api onDataLoaded={updateCharacters} />
      <h1>Personajes de Rick and Morty</h1>
      <div className="character-cards">
        {characters.map(character => (
          <Card character={character} onCardClick={handleCardClick} /> /*key={character.id}  */
        ))}
      </div>

      {selectedCharacter && (
        <ApiDetail
          characterId={selectedCharacter}
          onDetailLoaded={handleDetailLoaded}
        />
      )}

      {selectedCharacter && characterDetail && (
        <div className="card-detail-overlay">
          <div className="card-detail">
            <button onClick={() => setCharacterDetail(null)}>X</button>
            <CardDetail character={characterDetail} />
          </div>
        </div>
      )}
  
    </div>
  );

}

export default Home