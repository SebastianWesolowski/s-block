import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "emotion-theming";

import { addReadme } from "storybook-readme";
import theme from "../src/stylesheet";
import { GlobalStyles } from "../src/styled";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    inlineStories: false,
  },
};

export const decorators = [
  (Story) => (
    <MUIThemeProvider theme={theme}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{Story()}</ThemeProvider>
    </MUIThemeProvider>
  ),
  addReadme(),
];
