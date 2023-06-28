import styled from 'styled-components'
import Week from '../week/week'
import { Container } from 'components/container/container';
   

var nWeeks = []
const nSemanas = 3;

const Main = styled.main`
    display: flex;
    height: 100vh;
    width: 100%;
`

for(let i=1; i < nSemanas + 1 ;i++){
    (i % 52 == 0) ? nWeeks.push(<Week key={i} $ano> {i} </Week>) : nWeeks.push(<Week key={i}> {i} </Week>)
}


export default ()=>{
    return(
        <Main>
            <Container>
                {nWeeks.map(week => {
                    return(week )
                })}      
            </Container>   
        </Main>
    )
}

//------------------------------------------------------------------------

// const Main = styled.main`
//     display: flex;
//     height: 100vh;
//     width: 100%;
//     background-color: ${props => props.theme.colors.primary}
// `

// export default Main