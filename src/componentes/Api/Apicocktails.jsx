import React, { useEffect } from 'react';

function Apicocktails({ onDataLoaded }) {
  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list')
      .then(response => response.json())
      .then(data => {

        onDataLoaded(data.drinks);
        
      })
      .catch(error => {
        console.error('Error al obtener datos de la API', error);
      });
  }, [onDataLoaded]);

  return <div></div>;
}

export default Apicocktails;