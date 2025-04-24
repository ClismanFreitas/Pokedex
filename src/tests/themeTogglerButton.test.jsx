import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ThemeTogglerButton } from "../components/theme-toggle-button/theme-toggler.button";
import { ThemeContext, themes } from ".././contexts/Theme-context";
import { vi } from "vitest"

describe("ThemeTogglerButton", () => {
  it("alterna entre temas ao ser clicado", () => {
    const mockSetTheme = vi.fn();
    
    const { getByRole } = render(
      <ThemeContext.Provider value={{ theme: themes.dark, setTheme: mockSetTheme }}>
        <ThemeTogglerButton />
      </ThemeContext.Provider>
    );

    const button = getByRole("button");

    fireEvent.click(button);

    expect(mockSetTheme).toHaveBeenCalledWith(themes.light);
  });
});
