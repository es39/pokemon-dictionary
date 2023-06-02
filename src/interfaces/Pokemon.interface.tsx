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

interface type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface pokeSprites {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  other: {
    dream_world: {
      front_default: string;
    };
    'official-artwork': {
      front_default: string;
    };
  };
}

export type { pokemonName, pokemonImg, type, pokeSprites };
