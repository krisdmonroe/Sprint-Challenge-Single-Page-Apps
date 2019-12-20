import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from 'axios';
import {Link} from 'react-router-dom'
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          console.log(response.data.results)
          setCharacters(response.data.results)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
  }, []);

  

  return (
    <section className="character-list">
      {characters.map(character => (
     
     <CharacterCard
     key={character.id}
     name={character.name}
     species={character.species}
     gender={character.gender}
     image={character.image}
      
      />
      ))}
    </section>
  );
}
