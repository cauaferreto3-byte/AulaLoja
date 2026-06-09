import { useState, useEffect } from "react";
import { useParams } from "react-router";


function Usuario(){
    const [nome, setNome] = useState()
    const [sobrenome, setSobrenome] = useState()
    const [idade, setIdade] = useState()
    const [senha, setSenha] = useState()
    const [email, setEmail] = useState()
    const[imagem, setImagem] = useState()

    const {id} = useParams()

     useEffect(
            () => {
                async function buscarDados(){
                    const resposta = await fetch('https://dummyjson.com/users/'+id)
                    const dados = await resposta.json()

                    setNome(dados.firstName)
                    setSobrenome(dados.lastName)
                    setIdade(dados.age)
                    setEmail(dados.email)                    
                    setSenha(dados.password)
                    setImagem(dados.image)


                }
                buscarDados()
            }
                )

    let infoUsuario = {
        display: "flex",
        justifyContent: "center",
        // flexDirection: "column",
        alignItems : "center",
    }

     let areaUsuario = {
            textAlign: "center",
            border: "1px solid black",
            width: "20%",
            marginTop: "150px"
        }

    return<>

    <div style={infoUsuario}>

    <div style={areaUsuario}>
    <h2>{nome} {sobrenome}</h2>
    <p>Idade: {idade}</p>
    <p>Email: {email}</p>
    <p>Senha: {senha}</p>
    <img src={imagem}></img>
    </div>

    </div>


    </>
    
}
export default Usuario