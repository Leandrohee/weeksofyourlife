import styled from 'styled-components'
import { useState } from 'react'
import {Link} from 'react-router-dom' 

const Inicial = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.colors.white};

    .div-central{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 30%;
        width: 30%;
        border: 1px solid white;
        box-shadow: rgba(49, 8, 8, 0.35) 0px 5px 15px;                                      
    }

    .label-data{
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 18px;
    }

    .input-data{
        text-align: center;
        background-color: #fff;
        font-family: "Roboto Mono",monospace;
        color: black;
        font-size: 15px;
        border: none;
        outline: none;
        border-radius: 5px;
        height: 2rem;
        margin: 1.5rem;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 9px;                                      

    }

    .input-submit{
        all: unset;
        text-align: center;
        width: 30%;
        height: 1.5rem;
        padding: 0.5rem;
        border-radius: 10px;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 15px;
        background-color: #EA5455;
        color: ${props => props.theme.colors.black};
        box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 9px;                                      
        cursor: pointer;
    }

    .input-submit:hover{
        background-color: black;
        color: ${props => props.theme.colors.white};
    }

    .link{
        width: 30%;
    }

`

export default()=>{

    const [birth, setBirth] = useState("")          //No react so consigo mudar uma const com o useState

    function catchBirth(e){
        e.preventDefault()
        const inputData =  document.querySelector(".input-data").valueAsDate
        setBirth(inputData)

        const link = document.querySelector("link")
        console.log(link)

        cliqueNoLink()
    }

    function cliqueNoLink(e){
        console.log(e)
    }

    return(
        <Inicial>
            <form className='div-central' onSubmit={(e)=> catchBirth(e)}>
                {/* <label>Gênero</label>
                <input/>
                <label>País</label>
                <input/> */}
                <label className="label-data">Insira sua data de nascimento</label>
                <input required className="input-data"type="date"/>                 
                <input className="input-submit" type='submit' value="Acessar" />
                <Link className="link" to="/main" onClick={cliqueNoLink()} >a</Link>
            </form>
         
        </Inicial>
    )
}