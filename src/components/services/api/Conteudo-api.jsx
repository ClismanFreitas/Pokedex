import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../contexts/Theme-context";
import ConteudoDescricao from "../../Main/Conteudo-descricao";
import InfoPokemon from "../../Infos/informacoes";


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

                    const nameSkills = details.data.abilities.map((abilityInfo) => abilityInfo.ability.name);

                    const descricaoSkills = details.data.abilities.map((skillInfo) => skillInfo.ability.url);

                    const skillsDetails = await Promise.all(
                        descricaoSkills.map((url) => axios.get(url))
                    );

                    const skillsDescriptions = skillsDetails.map((res) => {
                        const effect = res.data.effect_entries.find((e) => e.language.name === "en");
                        return effect ? effect.short_effect : "Descrição não disponível";
                    });

                    const movimento = details.data.moves.map((moves) => (
                        moves.move.name
                    ))
                    const numeroDeMovimentos = movimento.slice(0, 11)

                    return {
                        name: pokemon.name,
                        image: details.data.sprites.front_default,
                        tipo: types,
                        habilidades: nameSkills,
                        infoHabilidades: skillsDescriptions,
                        movimentos: numeroDeMovimentos
                    };
                })
            );

            setIsPokemons(pokemonsData);
        };

        fetchData();
    }, [PokemonsList]);

    const FetchType = () => {
        
    }

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