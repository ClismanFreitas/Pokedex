import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { beforeEach, vi }  from "vitest"
import axios from "axios"
import ListType from "../components/services/api/SelectType"

vi.mock("axios")

describe("ListType", () => {
  const mockBuscarPokemons = vi.fn()
  const mockTheme = { background: "#000", color: "#fff" }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("renderiza corretamente e chama buscarPokemonsPadrao ao selecionar tipo", async () => {

    axios.get.mockResolvedValue({
      data: {
        results: [
          { name: "fire" },
          { name: "water" },
          { name: "grass" }
        ]
      }
    })

    render(<ListType theme={mockTheme} buscarPokemonsPadrao={mockBuscarPokemons} />)

    await waitFor(() => {
      expect(screen.getByRole("combobox")).toBeInTheDocument()
    })

    expect(screen.getByText("Fire")).toBeInTheDocument()
    expect(screen.getByText("Water")).toBeInTheDocument()
    expect(screen.getByText("Grass")).toBeInTheDocument()

    fireEvent.change(screen.getByRole("combobox"), { target: { value: "water" } })
    expect(mockBuscarPokemons).toHaveBeenCalledWith("water")
  })
})