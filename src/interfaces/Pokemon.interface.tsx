// * 포켓몬 영문이름
interface pokemonName {
  name: string;
  url: string;
}

// * 포켓몬 이미지
interface pokemonImg {
  back_default: string;
  front_default: string;
  back_shiny: string;
  front_shiny: string;
}

// * 포켓몬 타입
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

// * 포켓몬 정보
// interface pokemonInfo {
//   name: string;
//   image: string;
//   type: string;
//   id: number;
// }

// * 포켓몬 한글 이름
interface pokeKoreaName {
  id: number;
  koreaName: string;
}

interface pokeKoreaNameProps {
  pokeName: pokeKoreaName[];
}

interface pokeNameProps {
  pokeName: {
    id: number;
    key: number;
    koreaName: string;
  };
}
[];

export type {
  pokemonName,
  pokemonImg,
  type,
  pokeSprites,
  pokeKoreaName,
  pokeKoreaNameProps,
  pokeNameProps,
};
