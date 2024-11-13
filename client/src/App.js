import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./utils/Themes";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>

      </ThemeProvider>
  );
}

export default App;
