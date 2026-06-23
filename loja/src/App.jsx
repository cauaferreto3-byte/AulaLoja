
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Menu from './partes/Menu'
import Produtos from './pages/Produtos'
import Produto from './pages/Produto'
import Usuarios from './pages/Usuarios'
import Usuario from './pages/Usuario'
import DescreverProduto from './pages/DescreverProduto'
function App() {
 

  return (
    <>
      <Menu></Menu>

      <Routes>
        <Route path='/' element={<Produtos/>}></Route>
        <Route path='/produto/:id' element={<Produto/>}/>
        <Route path='/usuarios' element={<Usuarios/>}/>
        <Route path='/usuario/:id' element={<Usuario/>}/>
        <Route path="/descrever" element={<DescreverProduto />} />
      </Routes>
    </>

    
  )
}

export default App
