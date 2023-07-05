import { GlobalStyle } from "./paginas/global.style/global.style";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import theme from "paginas/ThemeProvider/themeProvider";
import Main from "./components/main/main";
import Inicial from "paginas/Inicial/inicial";


export default function App() {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicial/>}></Route>
            <Route path="/main" element={<Main/>}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>  
  );
}

{/* 
<Main birth={birth}></Main> */}