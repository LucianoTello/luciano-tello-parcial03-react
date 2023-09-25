import React from 'react'

function CardCocktail({ cocktail }) {
    return (
        <div className="cocktail-card">
          <h2>{cocktail.strGlass}</h2>
        </div>
      );
}


export default CardCocktail