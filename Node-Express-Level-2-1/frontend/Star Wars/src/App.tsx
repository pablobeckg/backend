import { IPerson } from "../../../models/IPerson";
import { IStarship } from "../../../models/IStarship";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState<IPerson[]>([]);
  const [starships, setStarships] = useState<IStarship[]>([]);

  const BASE_URL = "http://localhost:3000";
  const CHARACTERS_URL = `${BASE_URL}/characters`;
  const STARSHIPS_URL = `${BASE_URL}/starships`;

  useEffect(() => {
    fetch(CHARACTERS_URL)
      .then((response) => response.json())
      .then((characters: IPerson[]) => setCharacters(characters))
      .catch((error) => console.error("Error fetching characters", error));

    fetch(STARSHIPS_URL)
      .then((response) => response.json())
      .then((starships: IStarship[]) => setStarships(starships))
      .catch((error) => console.error("Error fetching starships", error));
  }, []);

  return (
    <>
      <div>
        <h1>Star Wars</h1>
        <h2>Characters</h2>
        <ul>
          {characters.map((character) => (
            <li key={character.id}>
              {character.name}
            </li>
          ))}
        </ul>
        <h2>Starships</h2>
        <ul>
          {starships.map((starship) => (
            <li key={starship.id}>
              {starship.name} 
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
