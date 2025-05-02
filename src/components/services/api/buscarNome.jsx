import React, { useState, useCallback } from "react";
import axios from "axios";
import { Input, DivInput, ButtonInput } from "../../Main/styles-main";

export const BuscarPorNome = ({ setPokemons, theme, buscarPokemonsPadrao }) => {
    const [nome, setNome] = useState("");
    const [erro, setErro] = useState("");

    const buscarPokemonPeloNome = useCallback(async (nome) => {
        if (!nome) return;
        try {
            setErro("")
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase()}`);
            const pokemon = response.data;

            const habilidades = pokemon.abilities.map((a) => a.ability.name);
            const habilidadesDetalhes = await Promise.all(
                pokemon.abilities.map(async (a) => {
                    const res = await axios.get(a.ability.url);
                    const effect = res.data.effect_entries.find(e => e.language.name === "en");
                    return effect ? effect.short_effect : "Descrição não disponível";
                })
            );

            const novoPokemon = {
                name: pokemon.name,
                image: pokemon.sprites.front_default,
                tipo: pokemon.types.map(t => t.type.name),
                habilidades: habilidades,
                infoHabilidades: habilidadesDetalhes,
                movimentos: pokemon.moves.slice(0, 10).map(m => m.move.name),
            };

            setPokemons([novoPokemon]);
        } catch (error) {
            console.error("Pokémon não encontrado:", error);
            setPokemons([])
            setErro("Pokémon não encontrado.");
        }
    }, [setPokemons]);

    const handleChange = (e) => {
        const valor = e.target.value;
        setNome(valor);

        if (valor.trim().length === 0) {
            setErro("");
            buscarPokemonsPadrao(); 
        }
    };

    const handleClick = () => {
        if (nome.trim().length === 0) {
            setErro("");
            buscarPokemonsPadrao();
        } else {
            buscarPokemonPeloNome(nome);
        }
    };

    return (
        <>
        <DivInput>
            <Input
                type="text"
                value={nome}
                onChange={handleChange}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleClick();
                    }
                }}
                placeholder="Buscar por nome"
            />
            <ButtonInput theme={theme} onClick={handleClick}>Buscar</ButtonInput>
        </DivInput>
            {erro && <h2 style={{ textAlign: "center", width: "100%", padding: "2rem", color:"white" }}>{erro}</h2>}
         </>
    );
};
