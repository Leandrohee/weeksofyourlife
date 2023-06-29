import styled from 'styled-components'
import Week from '../week/week'
import { Container } from 'components/container/container';
   

var nWeeks = []
const nSemanas = 100;

const Main = styled.main`
    display: flex;
    height: 100%;
    width: 100%;
`

for(let i=1; i < nSemanas + 1 ;i++){
    nWeeks.push(i)
}


export default ({birth})=>{  
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
