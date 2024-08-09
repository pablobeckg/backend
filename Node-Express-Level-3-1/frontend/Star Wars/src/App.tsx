import { IPerson } from "../../../models/IPerson";
import { IStarship } from "../../../models/IStarship";
import { IPlanets } from "../../../models/IPlanets";
import { useEffect, useState } from "react";
import "./App.css";
import AddStarshipForm from "./components/AddStarshipForm";

function App() {
  const [characters, setCharacters] = useState<IPerson[]>([]);
  const [starships, setStarships] = useState<IStarship[]>([]);
  const [planets, setPlanets] = useState<IPlanets[]>([])

  const BASE_URL = "http://localhost:3000";
  const CHARACTERS_URL = `${BASE_URL}/characters`;
  const STARSHIPS_URL = `${BASE_URL}/starships`;
  const PLANETS_URL = `${BASE_URL}/planets`;

  useEffect(() => {
    fetch(CHARACTERS_URL)
      .then((response) => response.json())
      .then((characters: IPerson[]) => setCharacters(characters))
      .catch((error) => console.error("Error fetching characters", error));

    fetch(STARSHIPS_URL)
      .then((response) => response.json())
      .then((starships: IStarship[]) => setStarships(starships))
      .catch((error) => console.error("Error fetching starships", error));

      fetch(PLANETS_URL)
      .then((response) => response.json())
      .then((planets: IPlanets[]) => setPlanets(planets))
      .catch((error) => console.error("Error fetching planets", error));
  }, []);

  return (
    <>
    <AddStarshipForm/>
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
        <h2>Planets</h2>
        <ul>
          {planets.map((planet) => (
            <li key={planet.id}>
              {planet.name} 
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
