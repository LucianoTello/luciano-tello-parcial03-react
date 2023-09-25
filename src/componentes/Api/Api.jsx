import React, { useEffect, useState } from 'react';
function Api({ onDataLoaded }) {

    useEffect(() => {
      
      fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {

          onDataLoaded(data.results);
          
        })
        .catch(error => {
          console.error('Error al obtener datos de la API', error);
        });
    }, [onDataLoaded]);

  return (
    <div></div>
  )
}

export default Api