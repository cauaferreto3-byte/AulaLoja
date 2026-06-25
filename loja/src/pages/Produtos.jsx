import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";

function Produtos(){

     const [produtos, setProdutos] = useState([])


    useEffect(
        () => {
            async function buscarDados(){
                const resposta = await fetch('https://dummyjson.com/products')
                const dados = await resposta.json()
                setProdutos(dados.products)
                console.log(dados)
            }     
            buscarDados()
        }
    , [])

       

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

    return <>

    <div style={cabecalho}>
          <h2 style={titulo}> Produtos</h2>
          
          <select id="categorias" name="categorias">
            <option value="" hidden></option>
            <option value="roupas">Roupas</option>
              <option value="calçados">Calçados</option>
  <option value="eletronicos">Eletrônicos</option>
  <option value="brinquedos">Brinquedos</option>
          </select>

        <div style={areaBotoes}>
        <button>Pesquisa</button>
        <button>Carrinho</button>
        </div>
</div>

        
        <ul style={meio}>
            {produtos.map(
            (prod) => (
                <li style={contProduto}> 
                    <img style={imagem} src={prod.thumbnail} alt="foto produto 1"/> 
                    <p><Link  to={`/produto/${prod.id}`}> Produto {prod.id}</Link></p>
                    <p>{prod.description}</p>
                    <p>US$ {prod.price}</p>

                </li>
            )
          )}
          

            {/* <li> 
                <img src="#"  alt="foto produto 1"/> 
                <Link to="/produto"> Produto 1</Link>
            </li> */}


        </ul>
            

    </>
}
export default Produtos;
