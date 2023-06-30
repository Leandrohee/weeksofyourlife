import { GlobalStyle } from "./paginas/global.style/global.style";
import { ThemeProvider } from "styled-components";
import theme from "paginas/ThemeProvider/themeProvider";
import Main from "./components/main/main";
import { useState } from "react";

export default function App() {

const [birth, setBirth] = useState({})    //No react so consigo mudar uma const com o useState

function catchBirth(e){
  const birthFind = (e.target.valueAsDate)      //pega a data selecionada
  setBirth(birthFind)
}

  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <input type="date" onChange={(e)=> catchBirth(e)}></input>
        <Main birth={birth}> 
        </Main>
      </ThemeProvider>
    </>  
  );
}

