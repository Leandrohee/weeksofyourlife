import { useState } from 'react'
import styled from 'styled-components'
import {atualizaApi, respostaApi, leApiCustomCor}  from 'conectaApi/conectaApi.js'

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


    //**********Daqui para baixo é quando for usar o banco de dados ***************
    var t1,t2,t3,c1,c2,c3,qualInput,foiCheck,vInput,vCheck
    t1 = respostaApi.text1[id].valor
    t2 = respostaApi.text2[id].valor
    t3 = respostaApi.text3[id].valor
    c1 = respostaApi.chec1[id].valor
    c2 = respostaApi.chec2[id].valor
    c3 = respostaApi.chec3[id].valor

    function mudarNaTask(e){
        qualInput = e.target.className.slice(0,5)
        foiCheck = e.target.className.slice(0,4)
        foiCheck == "text" ? vInput = e.target.value : vInput = null
        foiCheck == "chec" ? vCheck = e.target.checked : vCheck = null

        atualizaApi(id,qualInput,vInput,vCheck)
    }

    function changeColor(corclicada){
        customcor(corclicada)   
        // atualizaApi(id,"customcor",corclicada)

        leApiCustomCor().then((resposta)=>{
            // console.log(resposta[id].valor)
            if(corclicada == resposta[id].valor){
                atualizaApi(id,"customcor","")
            }
            else{
                atualizaApi(id,"customcor",corclicada)
            }
        })
    
        

        // if(respostaApi.customcor[id].valor == corclicada){
        //     atualizaApi(id,"customcor","")
        // }
    }

    function dizOla(palavra){
        console.log(palavra)
    }

    return(
        <Tasks 
            isclicked={isclicked} 
            onClick={(e)=>clickNaTask(e)}
            // onChange={(e)=>mudarNaTask(e)}
            onChange={(e)=>setTimeout(mudarNaTask,2000,e)}
            id={id}
        >
            <button className='btn-green' onClick={()=> changeColor("#03C988")}></button>
            <button className='btn-red' onClick={()=> changeColor("#FF6666")}></button>
            <li>
                <input id={id+0.1} className="chec1 input-checkbox" type='checkbox' defaultChecked={c1}/>
                <input id={id+0.2} className="text1 input-text" type='text' defaultValue={t1}/>
            </li>
            <li>
                <input  id={id+0.3} className="chec2 input-checkbox" type='checkbox' defaultChecked={c2}/>
                <input id={id+0.4}className="text2 input-text" type='text' defaultValue={t2}/>
            </li>
            <li>
                <input  id={id+0.5} className="chec3 input-checkbox" type='checkbox'defaultChecked={c3}/>
                <input id={id+0.6} className="text3 input-text" type='text' defaultValue={t3}/>
            </li>
        </Tasks>
    )
}