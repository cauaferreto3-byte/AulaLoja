import { Link } from "react-router-dom";
import Produto from "../pages/Produto";
import Usuario from "../pages/Usuario";
function Menu(){
 
    let AreaLista = {
        // width: "80%",
        marginTop: "0px",
        display: "flex",    
        justifyContent: "center",
        // border: "1px solid blue",
        listStyle: "none"
    }

    let conteudo = {
        marginRight: "10px",
        marginLeft: "10px"
    }
    
    let areaProduto = {
        
    }

 return <>
        <ul style={AreaLista}>
            <li style={conteudo}>
               <Link to="/"> Produtos </Link>
            </li>
            <li style={conteudo}>
                <Link to="/usuarios"> Usuarios </Link>
            </li>
             <li style={conteudo}>
                <Link to="/descrever">                
                    Descrever
                </Link>
            </li>
        </ul>

        {/* <div style={inicio}>
            <h2>Amazon</h2>
            <Link to="">Inicio</Link>
            <Link to="">Buscar</Link>
            <Link to="">Carrinho</Link>
            <Link to="">Recentes</Link>
            <Link>Config.</Link>
        </div>



        <div style={meio}>


            {/* select
            
            categorias
            
            listas e um input type text para digitação}
        
            <div style={areaProduto}>
            <h4>Smartphone</h4>
            <img/>
            <p></p>
            <button>Ver mais</button>
            <a>nota</a>
            <a>comentarios</a>
        </div>


        </div> */}
    </>
}
export default Menu;
