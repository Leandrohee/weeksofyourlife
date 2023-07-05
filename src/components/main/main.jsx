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
            ul:{
                cb1:"",
                tx1:"",
                cb2:"",
                tx2:"",
                cb3:"",
                tx3:"",
            },
            customcolor:""
        }
    )
}

// console.log(nWeeks)


export default ()=>{                 //Prop birth vem do app.js comtem a data do input
        
    return(
        <Main>
            <Container>
                {nWeeks.map(elem=>{
                    return(
                        <Week 
                            key={elem.i} 
                            id={elem.i} 
                            text1={elem.ul.tx1}
                            text2={elem.ul.tx2}
                            text3={elem.ul.tx3}
                        ></Week>
                    )
                })}
            </Container>   
        </Main>
    )
}

