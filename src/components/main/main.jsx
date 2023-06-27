import styled from 'styled-components'
import Week from '../week/week'

export default function Main(){
    
    var nWeeks = []
    const nSemanas = 4200;

    const Main = styled.main`
        display: flex;
        height: 100vh;
        width: 100%;
    `
    const Container = styled.section`
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        border: 1px solid black;
        margin: 2% 2% 0% 8%;
        width: 100%;
    `

    for(let i=0; i < 1000 ;i++){
        nWeeks.push(i)
    }
    
    return(
        <Main>
            <Container>
                {nWeeks.map(week => {
                    return(<Week key={week}> {week} </Week> )
                })}
            </Container>
        </Main>
    )
}