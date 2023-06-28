import styled from 'styled-components'



const Week = styled.div`
        width: 20px;
        height: 20px;
        margin: 3px;
        margin: 0.28845%;
        background-color: ${props => props.color ? props.color : "#d9d9d9"};
        border-radius: 5px;
        border: ${props => props.$ano ? "2px solid black" : ""};
        box-shadow: rgba(0, 0, 0, 0.35) 0 0.05rem 0.15rem;
 `

export default ({color, $ano})=>{
    return(
        <Week color={color} $ano={$ano} ></Week>
    )
}