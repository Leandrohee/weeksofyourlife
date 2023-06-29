import { useState } from 'react'
import styled from 'styled-components'

const Week = styled.div`
    //Dessa maneira o tamanho das semanas fica dinamico e o ano sempre vai acabar no final da linha.
        /* width: 1.41vw;
        height: 1.41vw;
        margin: 0.15vw; 
        border-radius: 5px;*/
        
    //Dessa maneira o tamanho das semanas fica estático e o ano pode acabar em linhas diferentes
        width: 3.4rem;
        height: 3.4rem;
        margin: 0.3rem;
        border-radius: 10px;

        background-color: ${props => props.color ? props.color : "#d9d9d9"};                    //Se tiver a props cor na criacao das weeks coloque a cor especifada senao coloque cinza mesmo
        border: ${props => props.ano == "true" ? "2px solid black" : ""};                                   //Toda vez que completar 52 semanas seleciona o elemento com uma borda
        box-shadow: rgba(0, 0, 0, 0.35) 0 0.05rem 0.15rem;                                      
        transition: transform .2s;                                                                //Essa atribuicao trabalha junto com o transforme 

        .inside-week{
            display: none;
            flex-direction: column;
            height: 100%;
            color: ${props => props.theme.colors.black};
            justify-content: top;
            align-items: center;
            font-size: 10px;
        }
        
        .week-titulo{
            font-size: 0.5rem;
        }

        .week-subtitulo{
            font-size: 0.42rem;
        }

        .week-relativo{
            margin: 0.3rem 0 0 0;
            font-size: 0.34rem;
        }

        &:hover{
            transform: translate(0, -1rem);                                           //Joga o elemento pra cima 1rem
            transform: scale(2.5);                                                      //Cresce o elemento 2x
            
            .inside-week{
                display: flex;
            }
        }
 `
 function clickNaSemana(e){
    console.log(e)
 }

 function mouseNaSemana(e){
    // console.log(e.target.innerHtml)
    // e.target.innerHtml = e.target.id
 }


// VARIAVIES GLOBAIS
var dataRefIni,dataRefFim
const dataFim={
    mes: "",
    dia: "",
}
var diaNiver, diaNiverMes,diaNiverDia, diaNiverDiaLim 
var ano,contAno

//

function contaAno(){
    contAno = contAno + 0.5
 }

function formatData(birth, id){

    const niver = new Date(birth)

    if(id == 1){ 
        diaNiver = new Date(birth)
        diaNiver.setDate(diaNiver.getDate()+1)
        diaNiverDia = diaNiver.getDate()
        diaNiverMes = diaNiver.getMonth()
        diaNiver.setDate(diaNiver.getDate()+6)
        diaNiverDiaLim = diaNiver.getDate()
    }

    var bDia = niver.getDay()                  //Pega o dia da semana do aniversario (0=dom, 6= sabado )
    var bMes = niver.getMonth()               //Pega o mes do aniversario (0=jan, 11=dez)
    var bAno = niver.getFullYear()            //Pega o ano do aniverario
    var dataRef

    function mudaDia(i){
        niver.setDate(niver.getDate()+ i)
        return(niver.getDate())
    }


    //FORMATANDO OS DIAS DO MES SEM ALTERAR O OBJETO "NIVER" (0=jan, 12=dez)
    if(bMes == 0){bMes = 1}                     //Janeiro
    else if(bMes == 1){bMes = 2}                //Fevereiro
    else if(bMes == 2){bMes = 3}                //Marco
    else if(bMes == 3){bMes = 4}                //Abril
    else if(bMes == 4){bMes = 5}                //Maio
    else if(bMes == 5){bMes = 6}                //Junho
    else if(bMes == 6){bMes = 7}                //Julho
    else if(bMes == 7){bMes = 8}                //Agosto
    else if(bMes == 8){bMes = 9}                //Setembro
    else if(bMes == 9){bMes = 10}               //Outubro
    else if(bMes == 10){bMes = 11}              //Novembro
    else if(bMes == 11){bMes = 12}              //Dezembro


    if(bDia == 0){bDia = 1}                     //Segunda
    else if(bDia == 1){bDia = 2}                //Terca    
    else if(bDia == 2){bDia = 3}                //Quarta
    else if(bDia == 3){bDia = 4}                //Quinta
    else if(bDia == 4){bDia = 5}                //Sexta
    else if(bDia == 5){bDia = 6}                //Sabado
    else if(bDia == 6){bDia = 7}                //Domingo
                                                       
    if (id == 1){                                                           //Primeira Semana
        dataRefIni = `${mudaDia(1)}/${bMes}/${bAno}`                       //Dia do aniversario no formato dd/mm/ano 

        for(let i=1; i<=7;i++){                                             //Serao 7 repeticoes
            if(bDia == i){                                                  //i =       {1,2,3,4,5,6,7}
                dataRefFim = `${mudaDia(7-i)}/${bMes}/${bAno}`               //7-(i) =   {6,5,4,3,2,1,0} (dia fim da primeira semana - domingo dd/mm/ano)     
            } 
        }
    }
    else{
        dataRef = (new Date(bAno,niver.getMonth(),mudaDia(9-bDia)))   //Primeira segunda depois do aniversario (formato date)    

        function mudaDiaIni(i){                                       //Essa funcao muda  o dia inicial de semana em semana
            dataRef.setDate(dataRef.getDate() + (i*(id-2)) )
            return(dataRef.getDate())
        }

        function mudaDiaFim(i){                                     //Essa funcao muda o dia final de semana em semana
            dataRef.setDate(dataRef.getDate() + i )
            return(dataRef.getDate())
        }

        function pegaMes(){
            let mes = dataRef.getMonth()
            if(mes == 0){mes = 1}                     //Janeiro
            else if(mes == 1){mes = 2}                //Fevereiro
            else if(mes == 2){mes = 3}                //Marco
            else if(mes == 3){mes = 4}                //Abril
            else if(mes == 4){mes = 5}                //Maio
            else if(mes == 5){mes = 6}                //Junho
            else if(mes == 6){mes = 7}                //Julho
            else if(mes == 7){mes = 8}                //Agosto
            else if(mes == 8){mes = 9}                //Setembro
            else if(mes == 9){mes = 10}               //Outubro
            else if(mes == 10){mes = 11}              //Novembro
            else if(mes == 11){mes = 12}              //Dezembro
            return(mes)
        }

        function pegaAno(){
            let ano = dataRef.getFullYear().toString()
            if(ano == "2020"){ ano = "20"}
            else{ano = ano.replace(/20|19/gi,"")}
            return(ano)
        }


        dataRefIni = `${mudaDiaIni(7)}/${pegaMes()}/${pegaAno()}`
        dataRefFim = `${mudaDiaFim(6)}/${pegaMes()}/${pegaAno()}`

         dataFim.mes = dataRef.getMonth()
         dataFim.dia = dataRef.getDate()   
    }

    
    
    console.log(diaNiverDia,diaNiverDiaLim, diaNiverMes) 
    
    if((dataFim.mes == diaNiverMes) && (dataFim.dia <=diaNiverDiaLim) && (dataFim.dia >=diaNiverDia)){
        ano = "true"
        contaAno()
    }
    else{
        ano = "false"
    }
}


export default ({color, id, birth })=>{ 
    if(id == 1){contAno = 0}

    formatData(birth, id)

    return(
        <Week 
            id={id} 
            color={color} 
            ano={ano} 
            onClick={(e) => clickNaSemana(e)} 
            onMouseOver={(e)=> mouseNaSemana(e)}
        >
            <div className='inside-week'>
                <p className='week-titulo'>{`${contAno} Anos`}</p>
                <p className='week-subtitulo'>{`Semana: ${id}`}</p>
                <p className='week-relativo'>{`${dataRefIni} - ${dataRefFim}`}</p>
            </div>
        </Week>
    )
}

