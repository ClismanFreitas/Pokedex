import { Main, Ul, Li, NomePokemon, Tipo, Div, Button, StyledLink } from "./styles-main";

const ConteudoDescricao = ({ pokemons, setPokemonsList, theme, loading }) => {
    const firstUpper = (string) => string.charAt(0).toUpperCase() + string.slice(1);

    return (
        <Main>
            {loading ? (
                <div style={{ textAlign: "center", width: "100%", padding: "2rem", color:"white" }}>
                    <h2>Carregando Pokémons...</h2>
                </div>
            ) : (
                <>
                    <Ul>
                        {pokemons.map((pokemon, index) => (
                            <Li key={index} theme={theme}>
                                <StyledLink to="/informacoes" state={{ pokemon }}>
                                    <div>
                                        <img src={pokemon.image} alt={pokemon.name} />
                                    </div>
                                    <NomePokemon>{firstUpper(pokemon.name)}</NomePokemon>
                                    {pokemon.tipo?.map((tipo, i) => (
                                        <Tipo key={i} $tipo={tipo}>
                                            {firstUpper(tipo)}
                                        </Tipo>
                                    ))}
                                </StyledLink>
                            </Li>
                        ))}
                    </Ul>
                    <Div>
                        <Button onClick={setPokemonsList} theme={theme}>
                            Carregar mais
                        </Button>
                    </Div>
                </>
            )}
        </Main>
    );
};

export default ConteudoDescricao;
