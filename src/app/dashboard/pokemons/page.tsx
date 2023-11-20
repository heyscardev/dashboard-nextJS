const getPokemons = async (offset = 0, limit = 20) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data = await res.json();
  return data;
};

const Pokemonspage = async () => {
  const pokemons = await getPokemons();
  return <div>{JSON.stringify(pokemons)}</div>;
};

export default Pokemonspage;
