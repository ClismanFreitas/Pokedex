import axios from "axios";
import React, { useContext, useEffect, useState, useCallback } from "react";
import { ThemeContext } from "../../../contexts/Theme-context";
import ConteudoDescricao from "../../Main/Conteudo-descricao";
import InfoPokemon from "../../Infos/informacoes";
import ListType from "./SelectType";

const Conteudo = () => {
    const [isPokemons, setIsPokemons] = useState([]);
    const { theme } = useContext(ThemeContext);
    const [pokemonsListLimit, setPokemonsListLimit] = useState(10);
    const [selectedType, setSelectedType] = useState(null);
    const [typePokemonOffset, setTypePokemonOffset] = useState(10);

    const buscarPokemonsPadrao = useCallback(async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonsListLimit}`);
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
                ));
                const numeroDeMovimentos = movimento.slice(0, 11);
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
        setSelectedType(null); 
        setTypePokemonOffset(10);
    }, [pokemonsListLimit]);

    const buscarPokemonsPorTipo = useCallback(async (type) => {
            const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
            const pokemonsUrl = response.data.pokemon.slice(typePokemonOffset, typePokemonOffset + 10).map((p) => p.pokemon.url);

            if (pokemonsUrl.length > 0) {
                const novosDetalhes = await Promise.all(
                    pokemonsUrl.map(async (url) => {
                        const res = await axios.get(url);
                        return {
                            name: res.data.name,
                            image: res.data.sprites.front_default,
                            tipo: res.data.types.map(t => t.type.name),
                            habilidades: res.data.abilities.map(a => a.ability.name),
                            infoHabilidades: await Promise.all(
                                res.data.abilities.map(async (a) => {
                                    const skillRes = await axios.get(a.ability.url);
                                    const effect = skillRes.data.effect_entries.find(e => e.language.name === "en");
                                    return effect ? effect.short_effect : "Descrição não disponível";
                                })
                            ),
                            movimentos: res.data.moves.slice(0, 10).map(m => m.move.name),
                        };
                    })
                );
                setIsPokemons(prevPokemons => [...prevPokemons, ...novosDetalhes]);
                setTypePokemonOffset(prevOffset => prevOffset + 10);
            }

    }, [typePokemonOffset]);

    useEffect(() => {
        buscarPokemonsPadrao();
    }, [buscarPokemonsPadrao]);

    const handleTypeChange = (type) => {
        setSelectedType(type === "All" ? null : type);
        setIsPokemons([]); 
        setTypePokemonOffset(10); 
        if (type !== "All") {
            buscarPokemonsPorTipo(type);
        } else {
            buscarPokemonsPadrao();
        }
    };

    const handleLoadMore = () => {
        if (selectedType) {
            buscarPokemonsPorTipo(selectedType);
        } else {
            setPokemonsListLimit(prev => prev + 10);
        }
    };

    return (
        <>
            <ListType
                setPokemonsList={setPokemonsListLimit}
                theme={theme}
                buscarPokemonsPadrao={handleTypeChange} 
            />

            <ConteudoDescricao
                pokemons={isPokemons}
                setPokemonsList={handleLoadMore}
                theme={theme}
            />

            <InfoPokemon
                pokemons={isPokemons}
                theme={theme}
            />
        </>
    );
};

export default Conteudo;