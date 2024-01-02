let pokemonTeam = [
  "pikachu",
  "mewtwo",
  "zapdos",
  "charmander",
  "eevee",
  "bulbasaur",
  "agumon", // Digimon?!
  "oshawott",
  "chikorita",
  "teddiursa",
  "weedle",
  "squirtle",
  "psyduck",
  "meowth"
 ]

// //for loops
// //for (counter)
// for (let i=2; i < pokemonTeam.length; i+=2){
//   console.log(pokemonTeam[i] + "is at index " + i);
// }


// //for of (takes more memory space)
// let counter = 2;
// for (const [index, pokemonName] of pokemonTeam.entries()) {
//   if (index < 2){
//     continue;
//   }
//   if (index == counter){
//     console.log(pokemonTeam[index] + " is at index " + index);
//     counter += 2;
//   }
// }


//for in

let favouritePokemon = {
  name:"blastoise",
  type: "water",
}

for (let property in favouritePokemon) {
  console.log(`${property} value in favouritePokemon is ${favouritePokemon[property]}`);
}

//favouritePokemon.property <-- won't work, no property declaired in lines 49-52
//favouritePokemon.name  <-- will work, name was declared in property



// for of

for (let property in Object.entries(favouritePokemon)) {
  console.log("property from for-of is " + property);
}



// // logs all Pokemon in the team:
// for (let currrentPokemon in pokemonTeam) {
//   console.log(currrentPokemon);
// }



// // while loop
// while(false){
//   console.log('while message appears at least once')
// }
// // do while loop
// // easy to create infinite loops with this

// do{
//   console.log('message appears at least once')
// } while( false)

// /*

// {
//   block of stuff to do
// }

// (condition to check)
