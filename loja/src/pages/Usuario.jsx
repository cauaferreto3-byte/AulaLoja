import { useState } from "react";

function Usuario(){
    const [nome, setNome] = useState()
    const [sobrenome, setSobrenome] = useState()
    const [idade, setIdade] = useState()
    const [senha, setSenha] = useState()
    const [email, setEmail] = useState()

     useEffect(
            () => {
                async function buscarDados(){
                    const resposta = await fetch('https://dummyjson.com/users/1')
                    const dados = await resposta.json()

                    setNome(dados.firstName)
                    setSobrenome(dados.lastName)
                    setIdade(dados.age)
                    setEmail(dados.email)                    
                    setSenha(dados.password)



                }
                buscarDados()
            }
                )

     let areaUsuario = {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems : "center"
        }

    return
    <>
    <div style={areaUsuario}>

    <h2>{nome}{sobrenome}</h2>
    <p>Idade: {idade}</p>
    <p>Email: {email}</p>
    <p>Senha: {senha}</p>
    </div>


    </>

}
export default Usuario