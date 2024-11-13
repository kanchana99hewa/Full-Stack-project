import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./utils/Themes";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
<BrowserRouter>

</BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
