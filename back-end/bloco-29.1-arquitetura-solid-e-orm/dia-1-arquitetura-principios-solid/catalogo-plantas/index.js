const express = require('express');

const app = express();

const plants = require('./plants');

app.get('/plants', (req, res) => {
  const allPlants = plants.getPlants();
  res.status(200).json(allPlants)
});

app.get('/plant/:id', (req, res) => {
  const {id} = req.params;
  const plant = plants.getPlantById(id);
  res.status(200).json(plant);
});

app.delete('/plant/:id', (req, res) => {
  const {id} = req.params;
  plants.removePlantById(id);
  res.status(200).json({message: "Deletado com sucesso!"});
});

app.post('/plant/:id', (req, res) => {
  const {id} = req.params;
  const newPlant = req.body.plant;
  const editedPlant = plants.editPlant(id, newPlant);
  res.status(201).json(editedPlant);
});

app.post('/plant/', (req, res) => {
  const newPlant = req.body.plant;
  const createPlant = plants.createNewPlant(newPlant);
  res.status(201).json(createPlant);
});

app.get('/sunny/:id', (req, res) => {
  const {id} = req.params;
  const plant = plants.getPlantsThatNeedsSunWithId(id);
  res.status(200).json(plant);
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));