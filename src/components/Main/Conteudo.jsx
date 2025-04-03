import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {Main, Ul, Li, NomePokemon, Tipo, Div, Button} from "./styles-main"
import { ThemeContext } from "../contexts/Theme-context";

const Conteudo = () => {
    const [isPokemons, setIsPokemons] = useState([]);
    const {theme} = useContext(ThemeContext)

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=11`);

            const pokemonsData = await Promise.all(
                response.data.results.map(async (pokemon) => {
                    const details = await axios.get(pokemon.url);
                    const types = details.data.types.map((typeInfo) => typeInfo.type.name);

                    return {
                        name: pokemon.name,
                        image: details.data.sprites.front_default,
                        tipo: types,
                    };
                    
                })
            );
            setIsPokemons(pokemonsData);
        };
        fetchData();
    }, []);


    const firstUpper = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <Main>
            <Ul>
                {isPokemons.map((pokemon, index) => (
                    <Li key={index} theme={theme}>
                        <div><img src={pokemon.image} /></div>
                        <NomePokemon>{firstUpper(pokemon.name)}</NomePokemon>

                        {pokemon.tipo.map((tipo, i) => (
                            <Tipo key={i} $tipo={tipo}>{firstUpper(tipo)}</Tipo>
                        ))}
                
                    </Li>
                ))}
            </Ul>
            <Div>
                <Button theme={theme}>Clique aqui</Button>
            </Div>
        </Main>
    );
};


export default Conteudo;
