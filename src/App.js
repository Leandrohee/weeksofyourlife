import { GlobalStyle } from "./paginas/global.style/global.style";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import theme from "paginas/ThemeProvider/themeProvider";
import Main from "./components/main/main";
import Inicial from "paginas/Inicial/inicial";
import { BirthProvider } from "context/birthContex";

// ARQUIVO APP EH O ARQUIVO BASE PARA O PROJETO - PONTO DE PARTIDA

// HIERARQUIA DOS ARQUIVOS: --> APP --> INICIAL --> MAIN            (PARALELO)
//                          --> APP --> MAIN    --> WEEK --> TASKS  (PARALELO)


export default function App() {
  return (
    <>
      <GlobalStyle/>                                                            {/*APLICA ESTILO GLOBAL*/}
      <ThemeProvider theme={theme}>                                             {/*APLICA THEMA PARA QUALQUER COMPONENTE ACESSAR*/}
        <BirthProvider>                                                         {/*REGULA O USECONTEX PARA TODOS OS COMPONENTES DENTRO ACESSAREM*/}
          <BrowserRouter>                                                       {/*REGULA AS ROTAS*/}
          <Routes>                                                              {/*APLICA TODAS AS ROTAS*/}
            <Route path="/" element={<Inicial/>}></Route>                      
            <Route path="/main" element={<Main/>}></Route>
          </Routes>
        </BrowserRouter> 
        </BirthProvider>

      </ThemeProvider>
    </>  
  );
}