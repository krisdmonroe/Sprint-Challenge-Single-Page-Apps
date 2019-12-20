import React, { useState, useEffect } from "react";
import axios from 'axios'
import CharacterCard from "./CharacterCard"

export default function SearchForm() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = e => {
setSearch(e.target.value)
  }
  useEffect(() => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          console.log(response.data.results)
          setData(response.data.results)
          const filtered = data.filter(character => {
            return character.name.toLowerCase().includes(search.toLowerCase());
          });
          setSearchResults(filtered)
        })
        .catch(error => {
          console.error('Server Error', error);
        });    
  }, [search]);
  
  return (
    <section className="search-form">
      <form>
        <label htmlFor="title">Search</label>
        <input type="text" name="title" onChange={handleChange}
        value={search}/>
    </form>
  {searchResults.map(character => 
    <CharacterCard 
    image={character.image}
    name={character.name}
    species={character.species}
    gender={character.gender}
    />
  )}
    </section>
  );
}
