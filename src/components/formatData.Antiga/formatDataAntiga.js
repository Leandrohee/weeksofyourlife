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