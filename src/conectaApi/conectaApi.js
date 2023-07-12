async function leApiText1(){
    const resposta = await fetch(`http://localhost:3001/text1`)     //resposta promisse
    const respostaJson = await resposta.json()                      //resposta promisse convertida
    return respostaJson
}

async function leApiText2(){
    const resposta = await fetch(`http://localhost:3001/text2`)     //resposta promisse
    const respostaJson = await resposta.json()                      //resposta promisse convertida
    return respostaJson
}

async function leApiText3(){
    const resposta = await fetch(`http://localhost:3001/text3`)     //resposta promisse
    const respostaJson = await resposta.json()                      //resposta promisse convertida
    return respostaJson
}

async function leApiChec1(){
    const resposta = await fetch(`http://localhost:3001/chec1`)     //resposta promisse
    const respostaJson = await resposta.json()                      //resposta promisse convertida
    return respostaJson
}

async function leApiChec2(){
    const resposta = await fetch(`http://localhost:3001/chec2`)     //resposta promisse
    const respostaJson = await resposta.json()                      //resposta promisse convertida
    return respostaJson
}

async function leApiChec3(){
    const resposta = await fetch(`http://localhost:3001/chec3`)     //resposta promisse
    const respostaJson = await resposta.json()                      //resposta promisse convertida
    return respostaJson
}

export async function leApiCustomCor(){
    const resposta = await fetch(`http://localhost:3001/customcor`)     //resposta promisse
    const respostaJson = await resposta.json()                      //resposta promisse convertida
    return respostaJson
}


//Pega todas os listas dos respectivos valores
const respostaText1 = await leApiText1()
const respostaText2 = await leApiText2()
const respostaText3 = await leApiText3()
const respostaChec1 = await leApiChec1()
const respostaChec2 = await leApiChec2()
const respostaChec3 = await leApiChec3()
const respostaCustomCor = await leApiCustomCor()


export const respostaApi = {
    text1: respostaText1,
    text2: respostaText2,
    text3: respostaText3,
    chec1: respostaChec1,
    chec2: respostaChec2,
    chec3:respostaChec3,
    customcor: respostaCustomCor
}


export async function atualizaApi(id,tipo,vInput,vCheck){            //atualiza dados na api
    var valor
    console.log(id,tipo,vInput,vCheck)
    if(vInput != null){valor = vInput}
    if(vCheck != null){valor = vCheck}
    
    const resposta = await fetch(`http://localhost:3001/${tipo}/${id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            id: id,
            valor: valor
        })
    })
}

