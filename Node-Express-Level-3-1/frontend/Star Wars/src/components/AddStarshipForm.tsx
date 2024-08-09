import { useState } from "react";


const AddStarshipForm = () => {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');

//   const BASE_URL = "http://localhost:3000";
//   const STARSHIPS_URL = `${BASE_URL}/starships`;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  
    try {
      console.log('Submitting starship data:', { name, model });
      const response = await fetch("http://localhost:3000/starships", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, model }),
      });
  
      console.log('Response status:', response.status);
  
      if (response.ok) {
        const newStarship = await response.json();
        console.log('Starship created:', newStarship);
      } else {
        console.error('Failed to create starship', response.statusText);
      }
    } catch (error) {
      console.error('Error occurred while creating starship:', error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Model:
          <input type="text" value={model} onChange={e => setModel(e.target.value)} />
        </label>
      </div>
      <button type="submit">Add Starship</button>
    </form>
  );
};

export default AddStarshipForm;