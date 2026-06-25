import { Link } from "react-router-dom"
import { useEffect, useState } from "react";



function Usuarios(){


    let cabecalho = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
        }

        let titulo = {
            textAlign: "center",
            margin: "0px"
        }

        let areaBotoes = {
            marginTop: "10px",
            width: "70%",
            display: "flex",
            justifyContent: "space-between"
        }

        let meio = {
            display: "flex",
            flexWrap: "wrap",
            listStyle: "none",
            marginTop: "30px"
        }

        let contProduto = {
            width: "22%",
            margin: "10px",
            border: "1px solid black",
            textAlign: "center"
        }

        let imagem = {
            width: "100%"
        }


    const [usuarios, setUsuarios] = useState([])

    useEffect(
            () => {
                async function buscarDados(){
                    const resposta = await fetch('https://dummyjson.com/users')
                    const dados = await resposta.json()
                    setUsuarios(dados.users)
                    console.log(dados)
                }     
                buscarDados()
            }
        , [])

return(<>

<div style={cabecalho}>
<h1 style={titulo}>Usuarios</h1>

<div style={areaBotoes}>
<button>Pesquisar</button>
<button>Amigos</button>
</div>

</div>

<div style={meio}>
{usuarios.map(
    (user) => (
    <div style={contProduto}>
    <Link to={`/usuario/${user.id}`}>Usuário {user.id}</Link> 
    <br></br>
    </div>
    )
    )}
</div>

</>
)






}
export default Usuarios