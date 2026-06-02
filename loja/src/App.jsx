
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Menu from './partes/Menu'
import Produtos from './pages/Produtos'
import Produto from './pages/Produto'
import Usuarios from './pages/Usuarios'
import Usuario from './pages/Usuario'
function App() {
 

  return (
    <>
      <Menu></Menu>

      <Routes>
        <Route path='/' element={<Produtos/>}></Route>
        <Route path='/produto' element={<Produto/>}/>
        <Route path='/usuarios' element={<Usuarios/>}/>
        <Route path='/usuario' element={<Usuario/>}/>
      </Routes>
    </>

    
  )
}

export default App
