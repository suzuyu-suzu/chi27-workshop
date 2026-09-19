import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { colors } from "./colors";


let theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: colors.yellow },
    secondary: { main: colors.pink },
    background: { default: colors.navy, paper: colors.navy },
    text: { primary: colors.white, secondary: "rgba(255,255,255,0.78)" },
  },
  typography: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    h1: { fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.01em" },
    h2: { fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" },
    h3: { fontWeight: 700 },
    body1: { lineHeight: 1.8 },
  },
  shape: { borderRadius: 8 },
});

theme = responsiveFontSizes(theme);

export default theme;
