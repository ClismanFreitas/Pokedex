import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/Theme-context";
import ConteudoDescricao from "./Conteudo-descricao";
import InfoPokemon from "../Infos/informacoes";


const Conteudo = () => {
    const [isPokemons, setIsPokemons] = useState([]);
    const { theme } = useContext(ThemeContext);
    const [PokemonsList, setPokemonsList] = useState(11);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${PokemonsList}`);
            const pokemonsData = await Promise.all(
                response.data.results.map(async (pokemon) => {
                    const details = await axios.get(pokemon.url);
                    const types = details.data.types.map((typeInfo) => typeInfo.type.name); 
                    const abilities = details.data.abilities.map((abilityInfo) => abilityInfo.ability.name)                  
                    
                    return {
                        name: pokemon.name,
                        image: details.data.sprites.front_default,
                        tipo: types,
                        habilidades: abilities,
                    };

                })
            );
            setIsPokemons(pokemonsData);
        };
        fetchData();
    }, [PokemonsList]);

    return (
        <>
            <ConteudoDescricao
                pokemons={isPokemons}
                setPokemonsList={setPokemonsList}
                theme={theme}
            />

            <InfoPokemon
                pokemons={isPokemons}
                setPokemonsList={setPokemonsList}
                theme={theme}
            />
        </>
    );
};

export default Conteudo;