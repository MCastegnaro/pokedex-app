type PokeResult = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{
    name: string;
    url: string;
  }>;
};

type PokeDetails = {
  id: number;
  name: string;
  base_experience: string;
  stats: Array<{
    base_stat: number;
  }>;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
};

export type { PokeResult, PokeDetails };
