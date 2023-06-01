interface pokemonName {
  name: string;
  url: string;
}

interface pokemonImg {
  back_default: string;
  front_default: string;
  back_shiny: string;
  front_shiny: string;
}

// interface pokemonType {
//   types: types[];
// }

// interface types {
//   slot: number;
//   type: type[];
// }

interface type {
  name: string;
  url: string;
}

export type { pokemonName, pokemonImg, type };
