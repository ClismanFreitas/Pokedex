import { Main, Ul, Li, NomePokemon, Tipo, Div, Button } from "./styles-main";

const ConteudoDescricao = ({ pokemons, setPokemonsList, theme }) => {
    const firstUpper = (string) => string.charAt(0).toUpperCase() + string.slice(1);

    return (
        <Main>
            <Ul>
                {pokemons.map((pokemon, index) => (
                    <Li key={index} theme={theme}>
                        <div>
                            <img src={pokemon.image} alt={pokemon.name} />
                        </div>
                        <NomePokemon>{firstUpper(pokemon.name)}</NomePokemon>
                        {pokemon.tipo.map((tipo, i) => (
                            <Tipo key={i} $tipo={tipo}>
                                {firstUpper(tipo)}
                            </Tipo>
                        ))}
                    </Li>
                ))}
            </Ul>
            <Div>
                <Button onClick={() => setPokemonsList(prev => prev + 10)} theme={theme}>
                    Carregar mais
                </Button>
            </Div>
        </Main>
    );
};

export default ConteudoDescricao;
