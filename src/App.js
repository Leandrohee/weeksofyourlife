import { GlobalStyle } from "./paginas/global.style/global.style";
import { ThemeProvider } from "styled-components";
import theme from "paginas/ThemeProvider/themeProvider";
import Main from "./components/main/main";

export default function App() {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <Main> 
        </Main>
      </ThemeProvider>
    </>  
  );
}

