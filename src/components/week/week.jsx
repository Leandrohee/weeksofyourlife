import Tasks from '../tasks/tasks'
import { useState } from 'react'
import styled from 'styled-components'

const Week = styled.div`                                    //Criando um styled components
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

        background-color: ${props => props.color};
        color: ${props => props.fontColor};
        border: ${props => props.ano == "true" ? "2px solid #F2CD5C" : ""};                                   //Toda vez que completar 52 semanas seleciona o elemento com uma borda
        box-shadow: rgba(0, 0, 0, 0.35) 0 0.05rem 0.15rem;                                      
        transition: transform .2s;                                                                //Essa atribuicao trabalha junto com o transforme 
        transform: scale(${props => props.isclicked == "true" ? 7 : ""});

        .inside-week{
            display: ${props => props.isclicked == "true"  ? "flex" : "none"};
            flex-direction: column;
            height: 100%;
            color: ${props => props.fontcolor};
            justify-content: top;
            align-items: center;
            font-size: 10px;
        }
        
        .week-titulo{
            font-size: 0.5rem;
            pointer-events:none;                                                    //Retira a possibilidade do click
        }

        .week-subtitulo{
            font-size: 0.3rem;
            pointer-events:none;                                                    //Retira a possibilidade do click
        }

        .week-relativo{
            margin: 0.1rem 0 0 0;
            font-size: 0.2rem;
            pointer-events:none;
        }
        
 

        &:hover{
            /* transform: translate(0, -1rem);                                           //Joga o elemento pra cima 1rem */
            /* transform: scale(2.5);                                                    //Cresce o elemento 2x */
            transform: scale(${props => props.isclicked == "true" ? "" : 2.5});                      //Se true n faz nada se false segue o jogo (2.5)   

            .inside-week{
                display: flex;
            }
        }
 `

// VARIAVIES GLOBAIS
var dataRefIni,dataRefFim
const dataFim={                                             //Data do fim de cada semana
    mes: "",
    dia: "",
    ano: "",
    data: "",
    tempo: "",
}
var diaNiver, diaNiverMes,diaNiverDia, diaNiverDiaLim 
var ano,contAno
var hoje = new Date()
var color, fontColor
var niver ={
    dia:"",
    mes:"",
    ano:"",
    diasemana:"",
    data:"",
} 
//------------------------------------
 

function mudaCor(cor, fonte){
    // if(hoje >= dataFim){
    //     color = "#787A91"
    //     fontColor = `white`
        
    // }
    // else{
    //     color = "#D9D9D9"
    //     fontColor = `black`
    // }

    // if(aniversario == "aniversario"){
    //     color = "#FFF2CC"
    //     fontColor = 'black'
    // }

    // if(custom != undefined){
    //     color = custom
    // }

    color = cor
    fontColor = fonte
}

// function formatData(birth, id){

//     const niver = new Date(birth)

//     if(id == 1){ 
//         diaNiver = new Date(birth)
//         diaNiver.setDate(diaNiver.getDate()+1)
//         diaNiverDia = diaNiver.getDate()
//         diaNiverMes = diaNiver.getMonth()
//         diaNiver.setDate(diaNiver.getDate()+6)
//         diaNiverDiaLim = diaNiver.getDate()
//     }

//     var bDia = niver.getDay()                  //Pega o dia da semana do aniversario (0=dom, 6= sabado )
//     var bMes = niver.getMonth()               //Pega o mes do aniversario (0=jan, 11=dez)
//     var bAno = niver.getFullYear()            //Pega o ano do aniverario
//     var bTempo = niver.getTime()
//     var dataRef

//     function mudaDia(i){
//         niver.setDate(niver.getDate()+ i)
//         return(niver.getDate())
//     }


//     //FORMATANDO OS DIAS DO MES SEM ALTERAR O OBJETO "NIVER" (0=jan, 11=dez) para (1=jan, 12=dez)
//     bMes = bMes+1 

//     //FORMATANDO OS DIAS DA SEMANA SEM ALTERAR O OBJETO "NIVER" (0=SEG, 6=DOM) para (1=SEG, 7=DOM)
//     bDia = bDia+1
                                                       
//     if (id == 1){                                                          //PRIMEIRA SEMANA
//         dataRefIni = `${mudaDia(1)}/${bMes}/${bAno}`                       //Dia do aniversario no formato dd/mm/ano 

//         for(let i=1; i<=7;i++){                                             //Serao 7 repeticoes
//             if(bDia == i){                                                  //i =       {1,2,3,4,5,6,7}
//                 dataRefFim = `${mudaDia(7-i)}/${bMes}/${bAno}`               //7-(i) =   {6,5,4,3,2,1,0} (dia fim da primeira semana - domingo dd/mm/ano)     
//             } 
//         }
//         mudaCor("#787A91","white")
        
//     }
//     else{                                                               //DEMAIS SEMANAS
//         dataRef = (new Date(bAno,niver.getMonth(),mudaDia(9-bDia)))   //Primeira segunda depois do aniversario (formato date)    

//         function mudaDiaIni(i){                                       //Essa funcao muda  o dia inicial de semana em semana
//             dataRef.setDate(dataRef.getDate() + (i*(id-2)) )
//             return(dataRef.getDate())
//         }

//         function mudaDiaFim(i){                                     //Essa funcao muda o dia final de semana em semana
//             dataRef.setDate(dataRef.getDate() + i )
//             return(dataRef.getDate())
//         }

//         function pegaMes(){
//             let mes = dataRef.getMonth()
//             mes = mes+1                                 //Formatando o mes para 1=jan e 12= dez sem mudar o dataref
//             return(mes)
//         }

//         function pegaAno(){
//             let ano = dataRef.getFullYear().toString()
//             if(ano == "2020"){ ano = "20"}
//             else{ano = ano.replace(/20|19/gi,"")}
//             return(ano)
//         }


//         dataRefIni = `${mudaDiaIni(7)}/${pegaMes()}/${pegaAno()}`
//         dataRefFim = `${mudaDiaFim(6)}/${pegaMes()}/${pegaAno()}`

//          dataFim.mes = dataRef.getMonth()
//          dataFim.dia = dataRef.getDate()
//          dataFim.ano = dataRef.getFullYear()
//          dataFim.data = dataRef 
//          dataFim.tempo = dataRef.getTime() 
//     }

//     function verificaSeSemanaAcabou(dataFim){
//         if(hoje >= dataFim){
//             mudaCor("#787A91","white")
//         }
//         else{
//             mudaCor("#d9d9d9","black")
//         }
//     }

//     verificaSeSemanaAcabou(dataFim.data)
 

//     if((dataFim.mes == diaNiverMes) && (dataFim.dia <=diaNiverDiaLim) && (dataFim.dia >=diaNiverDia)){
//         ano = "true"
//         contAno = dataFim.ano - bAno
//         mudaCor("#FFF2CC","black")
//     }
//     else{
//         ano = "false"
//         const diasDesdeNascimento = Math.floor((((dataFim.tempo - bTempo)/(1000*60*60*24))/365.25))         //como a funcao getTime() pega as horas e n o dia tive que acrescentar 0.25 para compensar a perda no longo przo
//         contAno = diasDesdeNascimento
//         if(id == 1){ contAno = 0}
//     }
// }


export default ({id, birth})=>{ 
 

    if(id == 1){
        niver.data = new Date(birth)                        //A variavel birth eh estatica e n muda ao longo do codigo 

        niver.mes = niver.data.getMonth()
        niver.mes = niver.mes + 1                           //Formato padrao vem (jan=0 e dez=11) mudei para (jan=1 e dez=12)
        niver.diasemana = niver.data.getDay()
        niver.diasemana = niver.diasemana + 1               //Formato padrao vem (seg=0 e dom=6) mudei para (seg=1 e dom=7)
        niver.ano = niver.data.getFullYear()
        niver.data.setDate(niver.data.getDate()+1)          //Formato padrao vem com 1 dia a menos
        niver.dia = niver.data.getDate()
 
        console.log(niver)  
    }  



    const [isclicked, setIsClicked] = useState("false")
    const [fontColorCustomn, setFontColorCustom] = useState("")
    const [colorCustom, setColorCustom] = useState("")           

    function clickNaSemana(e){                                      //funcao altera clique
        setIsClicked(isclicked == "false" ? "true" : "false")       //Altera para true ou false quando clicado
        console.log(e.target.parentNode)
    }

    function mudaCor(corbg,corfonte){
        setColorCustom(corbg)
        setFontColorCustom(corfonte)
    }

    function formatData(id, birth){
       

    }

    formatData(id, birth)


    return(
        <Week 
            id={id}                                             //propriedade de fora
            color={color}                                       //propriedade herdada de uma variavel global
            fontcolor = {fontColor}                             //propriedade herdada de uma variavel global
            ano={ano}                                           //propriedade herdada de uma variavel gloval
            onClick={(e) => clickNaSemana(e)}                   //funcao interna do componente react
            isclicked = {isclicked}                             //funcao interna do componente react
        >
            <div className='inside-week' >
                <p className='week-titulo'>{`${contAno} Anos`}</p>
                <p className='week-subtitulo'>{`Semana: ${id}`}</p>
                <p className='week-relativo'>{`${dataRefIni} - ${dataRefFim}`}</p>
                <Tasks isclicked={isclicked} id={id} cor={(cor)=> mudaCor(cor)}></Tasks>
            </div>
        </Week>
    )
}

