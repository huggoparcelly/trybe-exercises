const defaultPlants = [
  {
    id: 1,
    breed: "Bromelia",
    needsSun: false,
    origin: "Argentina",
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    id: 2,
    breed: "Orquidea",
    size: 99,
    needsSun: false,
    origin: "Brazil",
  },
];

let createdPlants = defaultPlants.length;

const calculateWaterFrequency = (needsSun, size, origin) => {
  return needsSun ? size *  0.77 + (origin === 'Brazil' ? 8 : 7)
  : (size / 2) *  1.33 + (origin === 'Brazil' ? 8 : 7);
}

const initPlant = (id, breed, needsSun, origin, specialCare, size) => {
  const waterFrequency = calculateWaterFrequency(needsSun, size, origin);
  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size,
  };
  return newPlant;
};

const getPlants = () => {
  return defaultPlants;
};


const getPlantById = (id) => {
  const idNumber = parseInt(id);
  return defaultPlants.filter((plant) => plant.id === idNumber);
};

const removePlantById = (id) => {
  const idNumber = parseInt(id);
  defaultPlants = defaultPlants.filter((plant) => plant.id !== idNumber);
};

const needsSun = (plant) => {
  return !!plant.needsSun;
}

const getPlantsThatNeedsSunWithId = (id) => {
  const idNumber = parseInt(id);
  return defaultPlants.filter((plant) => {
    return needsSun(plant) && plant.id === idNumber
  });
};

const editPlant = (plantId, newPlant) => {
  return defaultPlants.map((plant) => {
    if (plant.id === plantId) {
      return newPlant;
    }
    return plant;
  });
};

const createNewPlant = (plant) => {
  createdPlants++;
  const mappedPlant = initPlant(createdPlants, { ...plant });
  defaultPlants.push(mappedPlant);
  return defaultPlants;
};

module.exports = {
  getPlants,
  getPlantById,
  removePlantById,
  editPlant,
  createNewPlant,
  getPlantsThatNeedsSunWithId,
}