import express from 'express';
import { IPerson } from '../../models/IPerson'
import { IStarship } from '../../models/IStarship';
import { IPlanets } from '../../models/IPlanets';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const people: IPerson[] = [
  { id: 1, name: 'Luke Skywalker' },
  { id: 2, name: 'Darth Vader' },
  { id: 3, name: 'Leia Organa' }
];

let starships:IStarship[] = [
  { id: 1, name: 'X-Wing', model: 'T-65B' },
  { id: 2, name: 'TIE Fighter', model: 'Twin Ion Engine' }];


const planets: IPlanets[] = [
  { id: 1, name: 'Earth' },
  { id: 2, name: 'Mars' },
  { id: 3, name: 'Venus' }
];

app.use(express.json());

app.get('/characters', (req, res) => {
  res.json(people);
});

app.get('/starships', (req, res) => {
  res.json(starships);
});

app.get('/planets', (req, res) => {
  res.json(planets);
});

app.post('/starships', (req, res) => {
  const { name, model } = req.body;

  if (!name || !model) {
    return res.status(400).json({ message: 'Name and model are required' });
  }

  const newId = starships.length > 0 ? Math.max(...starships.map(s => s.id)) + 1 : 1;

  const newStarship = { id: newId, name, model };
  starships.push(newStarship);

  res.status(201).json(newStarship);
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});