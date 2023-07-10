import Tasks from '../tasks/tasks'
import { useEffect, useState, useContext} from 'react'
import styled from 'styled-components'
import { BirthContext } from 'context/birthContex'

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

        background-color: ${props => props.customcor == "false" ? props.color : props.customcor};
        color: ${props => props.fontColor};
        border: ${props => props.ano == "true" ? "2px solid #F2CD5C" : ""};                                   //Toda vez que completar 52 semanas seleciona o elemento com uma borda
        box-shadow: rgba(0, 0, 0, 0.35) 0 0.05rem 0.15rem;                                      
        transition: transform .2s;                                                                //Essa atribuicao trabalha junto com o transforme 
        transform: scale(${props => props.isclicked == "true" ? 7 : ""});                         //Se clicar aumenta a escala pra x7

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
var hoje = new Date()
var ano,contAno                                               //Contagem do ano
const contAnoRef={
    anorefencia:"",
    date:"",
    desdenascimento:"",
    tempo: ""
}
const niver ={                                              //Data atribuida somente 1 vez no id =1 (nascimento)
    dia:"",
    mes:"",
    ano:"",
    diasemana:"",
    data:"",
    tempo: ""
}
const dataRef={                                             //Data referencia que inicia sempre na seg e acaba sempre no domingo
    dia:"",                 //formato numero (1 a 31)
    mes:"",                 //formato numero (1 a 12)
    ano:"",                 //formato numero (2 numeros)
    diasemana:"",           //formato numero (1 a 7)
    data:"",                //formato date
    ini:"",                 //formato string dd/mm/yy        
    fim:"",                 //formato string dd/mm/yy       
    tempo:""                //milisegundos desde 1970
} 
//------------------------------------

export default ({id})=>{ 

    const {birth, toogleBirth} = useContext(BirthContext)

    console.log("pagina renderizada")
 
    if(id == 1){
        niver.data = new Date(birth)                        //A variavel birth eh estatica e n muda ao longo do codigo 
        
        niver.data.setDate(niver.data.getDate()+1)          //Formato padrao vem com 1 dia a menos
        niver.dia = niver.data.getDate()
        niver.tempo = niver.data.getTime()                  //Pega os milisegundos desde 1970
        niver.mes = niver.data.getMonth()
        niver.mes = niver.mes + 1                           //Formato padrao vem (jan=0 e dez=11) mudei para (jan=1 e dez=12)
        niver.diasemana = niver.data.getDay()
        if(niver.diasemana == 0){niver.diasemana = 7}       //Formato padrao vem (seg=1 e dom=0) mudei para (seg=1 e dom=7)
        niver.ano = niver.data.getFullYear()

        contAnoRef.data = niver.data                        //Inicia o contAno 
    }
    

    const [isclicked, setIsClicked] = useState("false")     //Quando clicar na semana muda pra true e a semana fica maior
    const [fontColor, setFontColor] = useState("black")
    const [color, setColor] = useState("#D9D9D9")
    const [customCor,setCustomCor] = useState("false")
    var colorBg, colorFonte                                 //Variaveis para mudar a cor do background e da fonte
    // var ano,contAno                                         //Contagem do ano

    function clickNaSemana(e){                                      //funcao altera clique
        setIsClicked(isclicked == "false" ? "true" : "false")       //Altera para true ou false quando clicado
        console.log(e.target.parentNode)
    }

    function mudaCustomCor(corC){                                       //Função somente acessada pelo task
        setCustomCor(customCor == "false" ? corC : "false")  
    }

    function verificaSemanaAcabou(data){                        //Verifica se a semana já acabou
        if (data <= hoje){                                      //Se acabou pinta de escuro
            colorBg = "#787A91"
            colorFonte = "white"
        }   
        else{                                                   //Senao pinta normal de claro
            colorBg = "#D9D9D9"
            colorFonte = "black"
        }
    }


    function formatData(id, birth){
        //REFERENCIANDO A DATAREF ESSE OBJETO SERA MODIFICADO AO LONGO DA FUNCAO
        dataRef.data = new Date(birth)
        dataRef.data.setDate(dataRef.data.getDate()+1)            //Formato padrao vem com 1 dia a menos
        dataRef.dia = dataRef.data.getDate()
        dataRef.diasemana = dataRef.data.getDay()
        if(dataRef.diasemana == 0){dataRef.diasemana = 7}       //Formato padrao vem (seg=1 e dom=0) mudei para (seg=1 e dom=7)

    
        function pegaDia(i){
            dataRef.data.setDate(dataRef.data.getDate()+ i)
            return(dataRef.data.getDate())
        }

        function pegaMes(){
            dataRef.mes = dataRef.data.getMonth()+1;            //Formato padrao vem (jan=0 e dez=11) mudei para (jan=1 e dez=12)
            return dataRef.mes
        }

        function pegaAno(){
            dataRef.ano = dataRef.data.getFullYear().toString()
            if(dataRef.ano == "2020"){ dataRef.ano  = "20"}
            else{dataRef.ano  = dataRef.ano.replace(/20|19/gi,"")}
            return dataRef.ano
        }

        function pegaTempo(){
            dataRef.tempo = dataRef.data.getTime()
            return dataRef.tempo
        }


        if(id == 1){                                     //PRIMEIRA SEMANA
            dataRef.ini = `${pegaDia(0)}/${pegaMes()}/${pegaAno()}`

            for(let i=1; i<=7;i++){    
                if( dataRef.diasemana == i){
                    dataRef.fim = `${pegaDia(7-i)}/${pegaMes()}/${pegaAno()}`
                    colorBg = "#787A91"
                    colorFonte = "white"
                }
            }
        }
        else{                                               //DEMAIS SEMANAS
            for(let i=1; i<=7;i++){    
                if( dataRef.diasemana == i){
                pegaDia(8-i)                                //Coloca o dataRef na primeira segunda depois do nascimento
                }
            }
            dataRef.ini = `${pegaDia(7*(id-2))}/${pegaMes()}/${pegaAno()}`          //Dia depois da primeira segunda = {0,7,14,21}
            dataRef.fim = `${pegaDia(6)}/${pegaMes()}/${pegaAno()}`                 //Dia depois do ref inicial sempre + 6

            verificaSemanaAcabou(dataRef.data)
        }
 
        //Aqui para baixo verifica o aniversario e o ano referente aquela semana

        contAnoRef.desdenascimento = Math.floor((((pegaTempo() - niver.tempo)/(1000*60*60*24))/365.25))
        contAnoRef.anoRef = niver.ano + contAnoRef.desdenascimento                                          //Sempre coloca o ano da week (1994,1995,1996...)
        contAnoRef.data = new Date(`${contAnoRef.anoRef},${niver.mes},${niver.dia}`)                        //Cria uma nova data com o ano referente da week (15/11/1994, 15/11/1995...)

        if(((pegaTempo() - contAnoRef.data.getTime())/((1000*60*60*24)))<7){                                //Se mor que 7 quer dizer que é semana do aniversario
            ano = "true"
            contAno = dataRef.data.getFullYear() - niver.ano
            colorBg = "#FFF2CC"
            colorFonte = "black"
        }
        else{
            ano = "false"
            contAno = contAnoRef.desdenascimento
            if(id == 1){ contAno = 0}
        }
    } 

    formatData(id, birth)

    useEffect(()=>{                                         //Para nao dar o problema dos renders
        setColor(colorBg)
        setFontColor(colorFonte)
    },[colorBg])


    return(
        <Week 
            id={id}                                             //propriedade de fora
            color={color}                                       //propriedade herdada de uma variavel global
            fontcolor = {fontColor}                             //propriedade herdada de uma variavel global
            ano={ano}                                           //propriedade herdada de uma variavel gloval
            onClick={(e) => clickNaSemana(e)}                   //funcao interna do componente react
            isclicked = {isclicked}                             //funcao interna do componente react
            customcor = {customCor}
        >
            <div className='inside-week' >
                <p className='week-titulo'>{`${contAno} Anos`}</p>
                <p className='week-subtitulo'>{`Semana: ${id}`}</p>
                <p className='week-relativo'>{`${dataRef.ini} - ${dataRef.fim}`}</p>
                <Tasks 
                    isclicked={isclicked} 
                    id={id}
                    customcor={(customCor)=> mudaCustomCor(customCor)}
                >
                </Tasks>
            </div>
        </Week>
    )
}

