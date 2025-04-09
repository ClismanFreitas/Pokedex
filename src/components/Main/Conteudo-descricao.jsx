import { Main, Ul, Li, NomePokemon, Tipo, Div, Button, StyledLink, DivSelect, Select, Option} from "./styles-main";

const ConteudoDescricao = ({ pokemons, setPokemonsList, theme }) => {
    const firstUpper = (string) => string.charAt(0).toUpperCase() + string.slice(1);

    return (
        <Main>
            <DivSelect>
                <Select theme={theme}>
                    <Option>All</Option>
                    <Option>Normal</Option>
                    <Option style={{color: 'red'}}>Fire</Option>
                    <Option style={{color: 'blue'}}>Water</Option>
                    <Option style={{color: 'green'}}>Grass</Option>
                    <Option style={{color: 'skyblue'}}>Flying</Option>
                    <Option style={{color: 'brown'}}>Fighting</Option>
                    <Option style={{color: 'purple'}}>Poison</Option>
                    <Option style={{color: 'yellow'}}>Electric</Option>
                    <Option style={{color: 'saddlebrown'}}>Ground</Option>
                    <Option style={{color: 'darkgray'}}>Rock</Option>
                    <Option style={{color: 'pink'}}>Psychic</Option>
                    <Option style={{color: 'lightblue'}}>Ice</Option>
                    <Option style={{color: 'lightgreen'}}>Bug</Option>
                    <Option style={{color: 'darkviolet'}}>Ghost</Option>
                    <Option style={{color: 'silver'}}>Steel</Option>
                    <Option style={{color: 'indigo'}}>Dragon</Option>
                    <Option style={{color: 'black'}}>Dark</Option>
                    <Option style={{color: 'lightpink'}}>Fairy</Option>
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
