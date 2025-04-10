import { Main, Ul, Li, NomePokemon, Tipo, Div, Button, StyledLink, DivSelect, Select, Option} from "./styles-main";

const ConteudoDescricao = ({ pokemons, setPokemonsList, theme }) => {
    const firstUpper = (string) => string.charAt(0).toUpperCase() + string.slice(1);

    return (
        <Main>
            <DivSelect>
                <Select theme={theme}>
                    <Option>All</Option>
                </Select>
            </DivSelect>
            <Ul>
                {pokemons.map((pokemon, index) => (
                    <Li key={index} theme={theme}>
                        <StyledLink to="/informacoes" state={{ pokemon }}>
                            <div>
                                <img src={pokemon.image} alt={pokemon.name} />
                            </div>
                            <NomePokemon>{firstUpper(pokemon.name)}</NomePokemon>
                            {pokemon.tipo.map((tipo, i) => (
                                <Tipo key={i} $tipo={tipo}>
                                    {firstUpper(tipo)}
                                </Tipo>
                            ))}
                        </StyledLink>
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
