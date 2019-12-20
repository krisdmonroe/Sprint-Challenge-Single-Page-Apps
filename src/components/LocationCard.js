import React from "react";
import CharacterList from "./CharacterList";

export default function LocationCard({ character }) {
  const {name, type, dimension, residents} = character
  return <span>
    <h1>{name}</h1>
    <h1>{type}</h1>
    <h1>{dimension}</h1>
    <h1>{residents}</h1>
  </span>;
}
