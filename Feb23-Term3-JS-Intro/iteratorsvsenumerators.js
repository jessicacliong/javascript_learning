let pokemonTeam = [
  "pikachu",
  "squirtle",
  "bulbasaur",
  "charmander"
]

// iterator - just knows which number we are on the list but doesn't know the data of the index we're on
for (let index = 0; index < pokemonTeam; index++) {
  console.log("moving through the list of pokemon: " + index)
  console.log("pokemon: " + pokemonTeam[index]);
}

// enumerator - it goes through a list with a specific data of the list, knows the exact data depending where you are in the loop
for (const pokemon of pokemonTeam) {
  console.log("pokemon: " + pokemon)
}

// Iterator = index
// Enumerator = value