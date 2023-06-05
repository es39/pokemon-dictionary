import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const PokemonInfomation = atom({
  key: 'PokemonInfomation',
  default: {
    name: '',
    image: '',
    type: '',
    id: 0,
  },
  effects_UNSTABLE: [persistAtom],
});

export { PokemonInfomation };
