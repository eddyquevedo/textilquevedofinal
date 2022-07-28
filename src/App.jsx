//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Rutas,Routes,Route,Navigate} from 'react-router-dom'
import NavBarExample from './components/NavBar/Navbar'
import TituloTotal from './components/titulo/titulo';
import ComponentContainer from './components/ItemListContainer/ComponentContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart.js';
import About from './components/about.js';
import Contact from './components/contact';
import {CartContextProvider } from './contexts/cartContext';
import CartWidget from './components/CartWidget/CartWidget';

function App() { //componente contenedor
  let contenido = 'VENTAS DE MAQUINAS DE COSER EN BUENOS AIRES' // estado
  let tituloApp = 'MAQUINAS DE COSER DON QUEVEDO'


  return (
    <CartContextProvider>
    <Rutas>
      <NavBarExample param1= {contenido}/>
      <Routes>
      <Route index path='/' element={<ComponentContainer saludo ='Maquinas en General' />}/>
      <Route path='/categoria/:categoriaId' element={<ComponentContainer saludo ='Grupo de Maquinas' />}/>
      <Route path='/detalle/:id' element={<ItemDetailContainer />}/>
      <Route path='/' element={ <TituloTotal tit={tituloApp} sub='Encontrá acá la herramienta que Buscás' />}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<Navigate replace to='/' />}/>
      <Route exact path="/carrito" element={<CartWidget />} />
      </Routes>
    </Rutas>
    </CartContextProvider>
  );
}
export default App;







