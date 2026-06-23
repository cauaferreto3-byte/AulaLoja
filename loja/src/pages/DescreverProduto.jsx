import { useEffect, useState } from "react"

function DescreverProduto (){

    const [descricao, setDescricao] = useState({})


    useEffect(
        () => {
            
            async function consultaIA(termo){
                const ia ={
                    model: "gemini-3.1-flash-lite",
                    input: `Descreva o produto ${termo} em até 100 palavras`
                }


                const url = 'https://generativelanguage.googleapis.com/v1beta/interactions'
                const resposta = await fetch(
                    url, {
                        headers:{
                            "Content-Type": "application/json",
                            "x-goog-api-key": ""  
                        },
                        method: 'POST',
                        body: JSON.stringify(ia)
                    }
                )
                const dados = await resposta.json()
                setDescricao(dados.steps[1].content[0])                
            }
          consultaIA('batata doce')  
        }, []
    )

    return(
        <>
       {descricao.text}
        </>


    )
}
export default DescreverProduto