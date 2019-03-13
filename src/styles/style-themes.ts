import theme from "styled-theming"

/**
 * Variables for Styles
 */

interface ReadOnlyStyles {
  readonly [n: string]: string
}

const COLOR: ReadOnlyStyles = {
  BLUE_CHILL: "#318989",
  BLUE_CHILL_DARKEST: "#318989",
}

const FONT: ReadOnlyStyles = {
  LATO: "Lato, Helvetica, Arial, sans-serif",
  ARCHIVO_NARROW: "Archivo Narrow, Helvetica, Arial, sans-serif",
}

const NavBarMainColor = theme("mode", {
  default: COLOR.BLUE_CHILL,
})

export const DefaultStyles: {} = {
  NavBar: {
    NavBarMainColor,
  },
  FONT,
}
