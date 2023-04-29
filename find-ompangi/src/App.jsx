import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import styled from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Vite + React</h1>
    </ThemeProvider>
  );
}

export default App;
