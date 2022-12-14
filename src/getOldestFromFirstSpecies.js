const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function getOldestFromFirstSpecies(id) {
  const func = employees.find((funcionario) => id === funcionario.id);
  const animal = func.responsibleFor[0];
  const infAnimal = species.find((dadosAnimal) => dadosAnimal.id === animal).residents;
  const maisVelho = infAnimal.sort((a, b) => b.age - a.age)[0];
  return [maisVelho.name, maisVelho.sex, maisVelho.age];
}

module.exports = getOldestFromFirstSpecies;
