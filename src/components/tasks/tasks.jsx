import { useState } from 'react'
import styled from 'styled-components'

const Tasks = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    list-style: none;
    /* pointer-events:none; */
    pointer-events: ${props => props.isclicked == "true" ? "auto" : "none"};
    margin-top: 0.2rem;

    .btn-green{
        position: absolute;
        top: 3px;
        left: 6px;
        width: 0.2rem;
        height: 0.2rem;
        border-radius: 50%;
        transform: scale(0.6);
        background-color: #03C988;
        border: 0.001rem solid #5D9C59;
    }

    .btn-red{
        position: absolute;
        top: 3px;
        left: 3px;
        width: 0.2rem;
        height: 0.2rem;
        border-radius: 50%;
        transform: scale(0.6);
        background-color: #FF6666;
        border: 0.001rem solid #FF0060;
    }

    li{
        display:flex;
        align-items: center;
    }

    .input-checkbox{
        padding: 0;
        width: 0.5rem;
        height: 0.5rem;
        background-color: transparent;
        margin-left: 0.1rem;
        border: 1px solid black;
        transform: scale(0.5);
    }


    .input-text{
        all: unset;
        width: 100%;
        height: 0.4rem;
        border: 0;
        margin: 0 0.2rem 0 0.1rem;
        background-color: transparent;
        border-bottom: 0.001rem solid black;
        font-size: 0.15rem;

    }
`
const listaDeInput = document.querySelectorAll(".input-text")

export default ({isclicked, id, customcor})=>{

    const [text1, setText1] = useState("leandro")

    function clickNaTask(e){
        e.stopPropagation()
        console.log(e.target)
    }

    function changeColor(corclicada){
        customcor(corclicada)   
    }


    return(
        <Tasks 
            isclicked={isclicked} 
            onClick={(e)=>clickNaTask(e)}
        >
            <button className='btn-green' onClick={()=> changeColor("#03C988")}></button>
            <button className='btn-red' onClick={()=> changeColor("#FF6666")}></button>
            <li>
                <input id={id+0.1} className="input-checkbox" type='checkbox' />
                <input id={id+0.2} className="input-text" type='text' />
            </li>
            <li>
                <input  id={id+0.3} className="input-checkbox" type='checkbox'/>
                <input id={id+0.4}className="input-text" type='text' />
            </li>
            <li>
                <input  id={id+0.5} className="input-checkbox" type='checkbox'/>
                <input id={id+0.6} className="input-text" type='text'/>
            </li>
        </Tasks>
    )
}