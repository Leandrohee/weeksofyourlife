import styled from 'styled-components'
import Week from '../week/week'
import { Container } from 'components/container/container';
   

var nWeeks = []                             //Criação de um array nWeeks para guardar o n° de semanas da sua vida
const nSemanas = 1500;                      //N° de semanas da sua vida

const Main = styled.main`                   //Criando um main para agrupar o container das semanas e as semanas
    display: flex;
    height: 100%;
    width: 100%;
`

for(let i=1; i < nSemanas + 1 ;i++){        //Acrescentando o numero de semanas no array nWeeks
    nWeeks.push(i)
}


export default ({birth})=>{                 //Prop birth vem do app.js comtem a data do input
        
    return(
        <Main>
            <Container>
                {nWeeks.map(i=>{
                    return(
                        <Week key={i} id={i} birth={birth}></Week>
                    )
                })}
            </Container>   
        </Main>
    )
}
