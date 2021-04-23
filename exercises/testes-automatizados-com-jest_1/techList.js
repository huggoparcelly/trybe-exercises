// refatoração feita com ajuda do gabarito

function techList(arrayTech, name) {
  if(arrayTech.length === 0) return 'Vazio!';

  const technologyList = arrayTech.sort()
    .map((technology) => ({
      tech: technology,
      name,
    }));
  return technologyList;
}

module.exports = techList;