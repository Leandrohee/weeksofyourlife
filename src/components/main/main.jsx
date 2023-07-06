import styled from 'styled-components'
import Week from '../week/week'
import { Container } from 'components/container/container';
   
 
var nWeeks = []                             //Criação de um array nWeeks para guardar o n° de semanas da sua vida
const nSemanas = 5;                      //N° de semanas da sua vida

const Main = styled.main`                   //Criando um main para agrupar o container das semanas e as semanas
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    .titulo{
    display:flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    font-family: 'Roboto', sans-serif;
    font-size: 5rem;
    font-weight: 300;
    }
`

for(let i=1; i < nSemanas + 1 ;i++){        //Acrescentando o numero de semanas no array nWeeks
    nWeeks.push(i)
}
// console.log(nWeeks)


export default ()=>{                 //Prop birth vem do app.js comtem a data do input
        
    return(
        <Main>
            <h1 className='titulo'>Weeks of YOUR life</h1>
            <Container>
                {nWeeks.map(elem=>{
                    return(
                        <Week 
                            key={elem} 
                            id={elem} 
                        ></Week>
                    )
                })}
            </Container>   
        </Main>
    )
}

