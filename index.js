const create = require("./src/animalController");

const animals = readJSONFile("./data", "animals.js");

const inform = console.log;

function run( {
  const action = process.argv[2];
  const animal = process.argv[3];

  let writeToFile = false;
  let updatedAnimals = [];

  switch (action) {
    case "index":
      inform(action, animals);
      break;
    case "create":
      updatedAnimals = create(animals, animal);
      writeToFile = true;
      break;
    case "show":
      inform(action, animal);
      break;
    case "update":
      inform(action, animal);
      break;
    case "destroy":
      inform(action, animal);
      break;
    case "score":
      inform(action);
      break;
    default:
      inform("There was an error.");
  }

  if (writeToFile) {
    writeJSONFile("./data", "animals.json", updatedAnimals);
  }
}

run();
