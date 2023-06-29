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
        border: ${props => props.ano ? "2px solid black" : ""};                                   //Toda vez que completar 52 semanas seleciona o elemento com uma borda
        box-shadow: rgba(0, 0, 0, 0.35) 0 0.05rem 0.15rem;                                      
        transition: transform .2s;                                                                //Essa atribuicao trabalha junto com o transforme 

        &:hover{
            transform: translate(0, -1rem);                                                       //Joga o elemento pra cima 1rem
            transform: scale(2);                                                                  //Cresce o elemento 2x
        }
 `
 function clickNaSemana(e){
    ""
 }

 function mouseNaSemana(e){
    console.log(e.target.innerHtml)
    e.target.innerHtml = e.target.id
 }

export default ({color, ano, id })=>{
    return(
        <Week id={id} color={color} ano={ano} onClick={(e) => clickNaSemana(e)} onMouseOver={(e)=> mouseNaSemana(e)}></Week>
    )
}

