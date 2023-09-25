import React, { useEffect, useState } from 'react';

function ApiDetail({ characterId, onDetailLoaded }) {
 
    useEffect(() => {
       
        fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(response => response.json())
            .then(data => {
            
            onDetailLoaded(data);
            console.log(data);
            })
            .catch(error => {
            console.error('Error al obtener detalles del personaje', error);
            });
        }, [characterId]);

        return <div>
            
        </div>

}

export default ApiDetail