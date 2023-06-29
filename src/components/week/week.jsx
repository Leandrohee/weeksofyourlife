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
            display: flex;
            flex-direction: column;
            height: 100%;
            color: red;
            justify-content: top;
            align-items: center;
            font-size: 10px;
        }
        
        .week-relativo{
            font-size: 6px;
        }

        &:hover{
            transform: translate(0, -1rem);                                           //Joga o elemento pra cima 1rem
            transform: scale(2);                                                      //Cresce o elemento 2x
        }
 `
 function clickNaSemana(e){
    console.log(e)
 }

 function mouseNaSemana(e){
    // console.log(e.target.innerHtml)
    // e.target.innerHtml = e.target.id
 }


var weekRelativa
function formatData(birth){
    // const birthFind = new Date(birth)

    const niver = new Date(birth)

    // const birthYear = birthFind.getFullYear()     //Pega o ano da data selecionada
    // birthFind.setDate(birthFind.getDate()+ 1)     //Pega o dia da data selecionada e adciona mais 1 dia 
    // const birthDate = birthFind.getDate()         //Pega o dia da data selecionada atualizado
    // birthFind.setMonth(birthFind.getMonth()+ 1)   //Pega o mes que nasceu e add mais 1 
    // var birthMonth = birthFind.getMonth()         //pega o mes que nasceu atualizado
    // var birthDay = birthFind.getDay()             //Pega o dia da semana do aniversario
  
    // birthDay == 0 ? birthDay = "dom" : birthDay=birthDay
    // birthDay == 1 ? birthDay = "seg" : birthDay=birthDay
    // birthDay == 2 ? birthDay = "ter" : birthDay=birthDay
    // birthDay == 3 ? birthDay = "qua" : birthDay=birthDay
    // birthDay == 4 ? birthDay = "qui" : birthDay=birthDay
    // birthDay == 5 ? birthDay = "sex" : birthDay=birthDay
    // birthDay == 6 ? birthDay = "sab" : birthDay=birthDay

    // birthDay == 0 ? birthDay = 7 : birthDay=birthDay


    // const Birth = {                                       //Atualizando o BirthDay
    //   data: birthDate,
    //   month: birthMonth,
    //   year: birthYear,
    //   day: birthDay,
    // }


    function mudaDia(i){
        niver.setDate(niver.getDate()+ i)
        return(niver.getDate())
    }
    
    var bDia = niver.getDay()             //Pega o dia da semana do aniversario (0=dom, 6= sabado )
    var bMes = niver.getMonth()               //Pega o mes do aniversario (0=jan, 11=dez)
    var bAno = niver.getFullYear()            //Pega o ano do aniverario
    var dataInicial
    var dataFinal 

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


    // if(bDia == 0){bDia = "seg"}
    // else if(bDia == 1){bDia = "ter"}
    // else if(bDia == 1){bDia = "qua"}
    // else if(bDia == 1){bDia = "qui"}
    // else if(bDia == 1){bDia = "sex"}
    // else if(bDia == 1){bDia = "sab"}
    // else if(bDia == 1){bDia = "dom"}

    // console.log(bDia)

    let cont = 0                                                        //Primeira Semana
    if (cont == 0){
        dataInicial = `${mudaDia(1)}/${bMes}/${bAno}`

        for(let i=0; i<5;i++){                                          //Serao 6 repeticoes
            if(bDia == i){                                              //i =   {0,1,2,3,4,5,6}
                dataFinal = `${mudaDia(6-i)}/${bMes}/${bAno}`       //6-1 = {6,5,4,3,2,1,0}     
            } 
        }

        console.log(dataInicial)
        console.log(dataFinal)
    }
  
    cont++

}


export default ({color, id, birth })=>{
    var yearOfWeek = Math.floor(id/52);

    let ano
    (id % 52 == 0) ? ano = "true" : ano = "false"
    
    if(id == 1) {
        formatData(birth)
    }


    return(
        <Week 
            id={id} 
            color={color} 
            ano={ano} 
            onClick={(e) => clickNaSemana(e)} 
            onMouseOver={(e)=> mouseNaSemana(e)}
        >
            <div className='inside-week'>
                <p>{`Year ${yearOfWeek}`}</p>
                <p>{`Week ${id}`}</p>
                <p className='week-relativo'>{weekRelativa}</p>
            </div>
        </Week>
    )
}

