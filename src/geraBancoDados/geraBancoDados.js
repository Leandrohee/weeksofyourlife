var text1 = ""
var text2 = ""
var text3 = ""

for (let i = 0; i <= 4200; i++) {

    text1 = text1 + `
        {
            "id": ${i},
            "valor": ""
        },
    `

    text2 = text2 + `
        {
            "id": ${i},
            "valor": ""
        },
    `

    text3 = text3 + `
        {
            "id": ${i},
            "valor": ""
        },
    `
}

console.log(text1)