import { Link } from "react-router-dom";
import Produto from "../pages/Produto";
import Usuario from "../pages/Usuario";
function Menu(){
 
    let inicio = {
        backgroundColor: "blue"
    }

    let meio = {

    }
    
    let areaProduto = {

    }

 return <>
        <ul>
            <li>
               <Link to="/"> Produtos </Link>
            </li>
            <li>
                <Link to="/usuarios"> Usuarios </Link>
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
