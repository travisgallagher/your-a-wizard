// @ts-nocheck
import React, {useEffect, useState} from 'react'


function Characters() {

    const [characters, setCharacters] = useState([]); 
    
    const getCharacters = async () => {
        
        const api = await fetch ("http://hp-api.herokuapp.com/api/characters");
        const data = await api.json();
        console.log(data); 
        setCharacters(data)
    }
    
        useEffect(() => {
            getCharacters(); 
        }, []);

// Use a callback hook with useEffect

  return (
    <div>
        {characters.map((character) => {
            console.log(character)
            return (
                    <div>
                        {character.name}
                       {character.house}
                        <img src={character.image}/>
                    </div>
            )
        })}

    </div>
  )
}


export default Characters