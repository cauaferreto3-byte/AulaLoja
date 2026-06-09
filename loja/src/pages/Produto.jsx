import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Produto(){

    const [titulo, setTitulo] = useState()
    const [foto, setFoto] = useState()
    const [preco, setPreco] =useState()
     const [categoria, setCategoria] =useState()
      const [descricao, setDescricao] =useState()


      const {id} = useParams()

    useEffect(
        () => {
            async function buscarDados(){
                const resposta = await fetch('https://dummyjson.com/products/'+id)
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
    

    //produzir o método get para ele pegar o id da rota URL de produto e mostrar o produto correspondente, 
    // para isso tem que usar o useParams do react-router-dom 
    // const {id} = useParams()


       

        let areaProduto = {
            // border: "1px solid black",
             display: "flex",
        // justifyContent: "center",
            // flexDirection: "column",
        // alignItems : "center",
        // justifyContent: "space-around"
            width: "60%"
        }

         let infoProduto = {
            flexDirection: "column", 
            marginLeft: "20px",
            // marginRight: "20px"
            // alignItems: "center"
        }

        let imagem = {
            border: "1px solid black",
            width: "60%",
            margin: "5px"
            // justifyContent: "start"
        }

    return <>
    

    <div style={areaProduto}>
    

    <img style={imagem} src={foto} />
        <div style={infoProduto}>
    <h2>{titulo}</h2>
    <p>R${preco}</p>
    <p>Bio: {descricao}</p>
    <p>Categoria: {categoria}</p>
    </div>


    

    {/* <button>Avaliação</button> */}
    </div>

   
    </>
    
}
export default Produto;


