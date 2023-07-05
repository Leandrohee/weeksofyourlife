import styled from 'styled-components'
import Week from '../week/week'
import { Container } from 'components/container/container';
   
 
var nWeeks = []                             //Criação de um array nWeeks para guardar o n° de semanas da sua vida
const nSemanas = 4200;                      //N° de semanas da sua vida

const Main = styled.main`                   //Criando um main para agrupar o container das semanas e as semanas
    display: flex;
    height: 100%;
    width: 100%;
`

for(let i=1; i < nSemanas + 1 ;i++){        //Acrescentando o numero de semanas no array nWeeks
    nWeeks.push(
        {
            i: i,
            li1:{
                check1: "",
                text1: ""
            },
            li2:{
                check2: "",
                text2: ""
            },
            li3:{
                check3: "",
                text3: ""
            },
            customcolor:""
        }
    )
}

console.log(nWeeks)

export default ({birth})=>{                 //Prop birth vem do app.js comtem a data do input
        
    return(
        <Main>
            <Container>
                {nWeeks.map(elem=>{
                    return(
                        <Week 
                            key={elem.i} 
                            id={elem.i} 
                            birth={birth}
                        ></Week>
                    )
                })}
            </Container>   
        </Main>
    )
}

