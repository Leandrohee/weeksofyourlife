import styled from 'styled-components'

const Tasks = styled.ul`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    list-style: none;
    /* pointer-events:none; */
    pointer-events: ${props => props.isclicked == "true" ? "auto" : "none"};
    margin-top: 0.2rem;

    li{
        display:flex;
        align-items: center;
    }

    li .input-checkbox{
        padding: 0;
        width: 0.5rem;
        height: 0.5rem;
        background-color: transparent;
        margin-left: 0.1rem;
        border: 1px solid black;
        transform: scale(0.5);
    }

    li .input-text{
        width: 100%;
        height: 0.4rem;
        border: 0;
        margin: 0 0.2rem 0 0.1rem;
        background-color: transparent;
        border-bottom: 0.001rem solid black;
        font-size: 0.2rem;

    }
`

export default ({isclicked})=>{

    function clickNaTask(e){
        e.stopPropagation()
    }

    return(
        <Tasks isclicked={isclicked} onClick={(e)=>clickNaTask(e)}>
            <li>
                <input  className="input-checkbox" type='checkbox'/>
                <input className="input-text" type='text'/>
            </li>
            <li>
                <input  className="input-checkbox" type='checkbox'/>
                <input className="input-text" type='text'/>
            </li>
            <li>
                <input  className="input-checkbox" type='checkbox'/>
                <input className="input-text" type='text'/>
            </li>
        </Tasks>
    )
}