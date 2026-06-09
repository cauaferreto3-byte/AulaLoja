import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

function Usuarios(){

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
<h1>Usuarios</h1>

{usuarios.map(
    (user) => (
    <>
    <Link to={`/usuario/${user.id}`}>Usuário {user.id}</Link> 
    <br></br>
    </>
    )
    )}


</>
)






}
export default Usuarios