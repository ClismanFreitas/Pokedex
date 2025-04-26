import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { BrowserRouter } from "react-router-dom"
import ConteudoDescricao from "../components/Main/Conteudo-descricao"

describe("ConteudoDescricao", () => {
  const mockPokemons = [
    {
      name: "pikachu",
      image: "https://example.com/pikachu.png",
      tipo: ["electric"]
    },
    {
      name: "bulbasaur",
      image: "https://example.com/bulbasaur.png",
      tipo: ["grass", "poison"]
    }
  ]

  const mockSetPokemonsList = vi.fn()
  const mockTheme = { background: "#000", color: "#fff" }

  it("renderiza pokémons e botão corretamente", () => {
    render(
      <BrowserRouter>
        <ConteudoDescricao
          pokemons={mockPokemons}
          setPokemonsList={mockSetPokemonsList}
          theme={mockTheme}
          loading={false}
        />
      </BrowserRouter>
    )

    expect(screen.getByText("Pikachu")).toBeInTheDocument()
    expect(screen.getByText("Bulbasaur")).toBeInTheDocument()

    expect(screen.getByText("Electric")).toBeInTheDocument()
    expect(screen.getByText("Grass")).toBeInTheDocument()
    expect(screen.getByText("Poison")).toBeInTheDocument()

    const botao = screen.getByRole("button", { name: /carregar mais/i })
    expect(botao).toBeInTheDocument()

    fireEvent.click(botao)
    expect(mockSetPokemonsList).toHaveBeenCalled()
  })

  it("mostra a mensagem de carregamento quando loading é true", () => {
    render(
      <ConteudoDescricao
        pokemons={[]}
        setPokemonsList={mockSetPokemonsList}
        theme={mockTheme}
        loading={true}
      />
    )

    expect(screen.getByText("Carregando Pokémons...")).toBeInTheDocument()
  })
})
