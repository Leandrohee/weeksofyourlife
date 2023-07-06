import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    /* margin: 6% 8% 5% 10%; */
    padding: 2.5rem 7.5rem;
    width: 100vw;

`

export default ()=>{
    return(
    <Container>
        <h1 className='titulo'>weeks of your life</h1>
    </Container>
    )

}