const { nanoid } = require("nanoid");
const animalPoints = require("../data/animalPoints.json");

function create(animals, animalName) {
  const animal = {
    name: animmalName,
    id: nanoid(4),
    points: animalPoints[animalName] || 10
  };
  animals.push(animal);
  return animals;
}
