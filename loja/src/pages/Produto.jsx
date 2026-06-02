import { useEffect, useState } from "react";

function Produto(){

    const [titulo, setTitulo] = useState()
    const [foto, setFoto] = useState()
    const [preco, setPreco] =useState()
     const [categoria, setCategoria] =useState()
      const [descricao, setDescricao] =useState()

    useEffect(
        () => {
            async function buscarDados(){
                const resposta = await fetch('https://dummyjson.com/products/1')
                const dados = await resposta.json()
                setTitulo(dados.title)
                setPreco(dados.price)
                setFoto(dados.images)
                setCategoria(dados.category)
                setDescricao(dados.description)
            }     
            buscarDados()
        }
    , [])
    
        let areaProduto = {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems : "center"
        }

        let imagem = {
            border: "1px solid black",
            width: "30%"
        }

    return <>
    <div style={areaProduto}>
        <h2>{titulo}</h2>
    <img style={imagem} src={foto} />
    <p>Categoria: {categoria}</p>
    <p>Bio: {descricao}</p>
    <p>Preço do produto: {preco}</p>
    {/* <button>Avaliação</button> */}
    </div>
    </>
    
}
export default Produto;


