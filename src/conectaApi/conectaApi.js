export async function leApi(){
    const resposta = await fetch('http://localhost:3001/weeks')     //resposta promisse
    const respostaJson = await resposta.json()                      //resposta promisse convertida
    return respostaJson
}

export const respostaLeApi = await leApi()


export async function atualizaApi(id,text1,text2,text3,chec1,chec2,chec3,customcor){            //atualiza dados na api
    const resposta = await fetch(`http://localhost:3001/weeks/${id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            id: id,
            text1: text1
        })
    })

}

