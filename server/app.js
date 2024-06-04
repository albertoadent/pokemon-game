const paths = {
  home: { main: "/", my: "/myHome" },
  start: "/start",
  battle: "/battle",
  myPokemon: {
    all: "/my-pokemon",
    id: "/my-pokemon/:pokemonId",
    type: myTypes,
  },
  pokemon: "/pokemon",
};

const types = {
  fire: "/fire",
  water: "/water",
  grass: "/gross",
  rock: "/rock",
  normal: "/normal",
  ghost: "/ghost",
  ice: "/ice",
  steel: "/steel",
  dragon: "/dragon",
  fairy: "/fairy",
  fighting: "/fighting",
  flying: "/flying",
  bug: "/bug",
  electric: "/electric",
  dark: "/dark",
  psychic: "/psychic",
  ground: "/ground",
  poison: "/poison",
};

const myTypes = (type) => paths.myPokemon.all + types[type];