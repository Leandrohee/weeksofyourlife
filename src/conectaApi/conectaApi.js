export async function leApi(){
    const resposta = await fetch('http://localhost:3001/weeks')     //resposta promisse
    const respostaJson = await resposta.json()                      //resposta promisse convertida
    return respostaJson
}

export const respostaLeApi = await leApi()


async function atualizaApi(id){
    const resposta = await fetch(`http://localhost:3001/weeks/${id}`)
    
}

