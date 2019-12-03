const getEvolutions = (pokemon) => {
  const evoChain = [];
  let evoData = pokemon || null;
  if (evoData) {
    do {
      const evoDetails = evoData.evolution_details[0];
      const id = evoData.species.url.split('/');
      evoChain.push({
        species_name: evoData.species.name,
        min_level: !evoDetails ? 1 : evoDetails.min_level,
        trigger_name: !evoDetails ? null : evoDetails.trigger.name,
        item: !evoDetails ? null : evoDetails.item,
        id: `${id[6]}`,
      });

      // eslint-disable-next-line prefer-destructuring
      evoData = evoData.evolves_to[0];
      // eslint-disable-next-line no-prototype-builtins
    } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
  }

  return evoChain;
};

export default getEvolutions;
