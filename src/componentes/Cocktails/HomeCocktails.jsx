import React, { useEffect, useState } from 'react';
import './HomeCocktails.css'; 
import Apicocktails from '../Api/Apicocktails';
import CardCocktail from '../Card/CardCocktail';

function HomeCocktails() {
  const [cocktails, setCocktails] = useState([]);

  
  const handleCocktailsDataLoaded = (data) => {
    setCocktails(data);
  };

  useEffect(() => {
    
  }, []);

  return (
    <div className="HomeCocktails">
      <Apicocktails onDataLoaded={handleCocktailsDataLoaded} />
      <h1>Cócteles</h1>
      <div className="cocktail-cards">
        {cocktails.map((cocktail, index) => (
          <CardCocktail key={index} cocktail={cocktail} />
        ))}
      </div>
    </div>
  );
}

export default HomeCocktails;