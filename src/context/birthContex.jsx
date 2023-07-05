import { createContext, useState } from "react";                  //Importando o createContext

export const BirthContext = createContext()                                //Atribuindo a uma variavel


export function BirthProvider({children}){                           //Criando uma funcao que ira manipular o Context
    
    const [birth,setBirth] = useState("arroz")

    function toggleBirth(bday){
        setBirth(bday) 
    }
    
    

    return(
        <BirthContext.Provider value={{birth,toggleBirth}}>
            {children}
        </BirthContext.Provider>
    )

}