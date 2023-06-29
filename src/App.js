import { GlobalStyle } from "./paginas/global.style/global.style";
import { ThemeProvider } from "styled-components";
import theme from "paginas/ThemeProvider/themeProvider";
import Main from "./components/main/main";
import { useState } from "react";

export default function App() {

const [birth, setBirth] = useState({})    //No react so consigo mudar uma const com o useState

function catchBirth(e){
  const birthFind = (e.target.valueAsDate)      //pega a data selecionada

  const birthYear = birthFind.getFullYear()     //Pega o ano da data selecionada
  const  birthDay = birthFind.getDay()             //Pega o dia da semana do aniversario
  const birthDate = birthFind.getDate()         //Pega o dia da data selecionada atualizado
  const  birthMonth = birthFind.getMonth()         //pega o mes que nasceu atualizado



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

