import { useState } from 'react'
import styled from 'styled-components'
import {leApi, respostaLeApi}  from 'conectaApi/conectaApi.js'
import { getValue } from '@testing-library/user-event/dist/utils'

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

    function clickNaTask(e){
        e.stopPropagation()
        console.log(e.target)
    }

    function changeColor(corclicada){
        customcor(corclicada)   
    }

    //Daqui para baixo é quando for usar o banco de dados 
    var t1,t2,t3
    t1 = respostaLeApi[id-1].text1
    t2 = respostaLeApi[id-1].text2
    t3 = respostaLeApi[id-1].text2

    function mudarNaTask(e){
        console.log(e.target.value)
        
    }

    return(
        <Tasks 
            isclicked={isclicked} 
            onClick={(e)=>clickNaTask(e)}
            onChange={(e)=>mudarNaTask(e)}
            id={id}
        >
            <button className='btn-green' onClick={()=> changeColor("#03C988")}></button>
            <button className='btn-red' onClick={()=> changeColor("#FF6666")}></button>
            <li>
                <input id={id+0.1} className="chec1 input-checkbox" type='checkbox'/>
                <input id={id+0.2} className="text1 input-text" type='text' defaultValue={t1}/>
            </li>
            <li>
                <input  id={id+0.3} className="chec2 input-checkbox" type='checkbox'/>
                <input id={id+0.4}className="text2 input-text" type='text' defaultValue={t2}/>
            </li>
            <li>
                <input  id={id+0.5} className="chec3 input-checkbox" type='checkbox'/>
                <input id={id+0.6} className="text3 input-text" type='text' defaultValue={t3}/>
            </li>
        </Tasks>
    )
}