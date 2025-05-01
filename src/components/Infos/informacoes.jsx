import { useLocation } from "react-router-dom";
import { NomePokemon, Tipo, Main, Footer } from "../Main/styles-main";
import { ThemeContext } from "../../contexts/Theme-context";
import React, { useContext } from "react";
import { Li, Div, Button, DivSkills, Lista, ListaSkills, Move, Moves, Img } from "./styles-info"
import Home from "../../Assets/Image/casa.png"
import { Link } from "react-router-dom"

const InfoPokemon = () => {
    const { theme } = useContext(ThemeContext);
    const location = useLocation();
    const { pokemon } = location.state || {};

    if (!pokemon) return;

    const firstUpper = (string) => string.charAt(0).toUpperCase() + string.slice(1);

    return (
        <Main>
            <Button>
                <Link to="/">
                    <Img theme={theme} src={Home} alt="Voltar para a pagina" />
                </Link>
            </Button>
            <ul>
                <Li theme={theme}>
                    <img src={pokemon.image} alt={pokemon.name} />
                    <Div>
                        <NomePokemon>{
                            firstUpper(pokemon.name)}
                        </NomePokemon>
                        {pokemon.tipo.map((tipo, i) => (
                            <Tipo key={i} $tipo={tipo}>
                                {firstUpper(tipo)}
                            </Tipo>
                        ))}
                    </Div>
                    <div>
                        <h3>Movimentos</h3>
                        <ul>
                            <Move theme={theme}>
                                {pokemon.movimentos.map((move, index) => (
                                    <strong key={move + index}><Moves theme={theme}>{firstUpper(move)}</Moves></strong>
                                ))}
                            </Move>
                        </ul>
                    </div>
                    <DivSkills theme={theme}>
                        <div>
                            <h3>Habilidades</h3>
                            <Lista>
                                {pokemon.habilidades.map((skill, index) => (
                                    <ListaSkills key={index}>
                                        <strong>{firstUpper(skill)}</strong>
                                        <span>{pokemon.infoHabilidades[index]}</span>
                                    </ListaSkills>
                                ))}
                            </Lista>
                        </div>
                    </DivSkills>
                </Li>
            </ul>
            <Footer theme={theme}>
                <p>2025 Clisman Freitas</p>
            </Footer>
        </Main>
    );
};

export default InfoPokemon;
