import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import InfoPokemon from "../components/Infos/informacoes";
import { describe, it, expect } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";

const HomePage = () => <div>Página inicial</div>;

describe("Informações do Pokémon", () => {
    const mockPokemon = {
        image: "https://example.com/pikachu.png",
        name: "Pikachu",
        tipo: ["eletric"],
        movimentos: ["Thunder-punch", "Slam"],
        habilidades: ["Static", "Lightning-rod"],
        infoHabilidades: ["Paralyzes opponent", "Boosts Electric moves"],
    };

    const mockTheme = { getBackground: "#000", color: "#fff" };

    it("renderiza informações do Pokémon", () => {
        render(
            <MemoryRouter initialEntries={[{ state: { pokemon: mockPokemon } }]}>
                <InfoPokemon
                    themes={mockTheme}
                />
            </MemoryRouter>
        );

        expect(screen.getByText("Pikachu")).toBeInTheDocument();
        expect(screen.getByText("Eletric")).toBeInTheDocument();
        expect(screen.getByText("Thunder-punch")).toBeInTheDocument();
        expect(screen.getByText("Slam")).toBeInTheDocument();
        expect(screen.getByText("Static")).toBeInTheDocument();
        expect(screen.getByText("Lightning-rod")).toBeInTheDocument();
    });

    it("navega para a tela incial ao clicar no botao", async() => {
        const user = userEvent.setup()

        render(
            <MemoryRouter initialEntries={[{ pathname: "/informacoes", state: { pokemon: mockPokemon } }]}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/informacoes" element={<InfoPokemon theme ={mockTheme} />}/>
                </Routes>
            </MemoryRouter>
        )

        const botaoVoltar = screen.getByRole("link", {name: /voltar para a pagina/i})
        await user.click(botaoVoltar)
        expect(screen.getByText("Página inicial")).toBeInTheDocument();
    })
});
