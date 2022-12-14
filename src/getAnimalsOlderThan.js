const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal)
    .residents.every((animalAge) => animalAge.age >= age);
}

module.exports = getAnimalsOlderThan;
