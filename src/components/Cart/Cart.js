import {React,useState} from 'react'
import { useCartContext } from '../../contexts/cartContext';
import {Link} from 'react-router-dom';
import {Container,Button} from 'react-bootstrap';
import {addDoc,collection, getFirestore,documentId,getDocs,query,where,writeBatch} from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
const Cart = () => {
  const {cart,vaciarCarrito,removeItem,totalPrecio} = useCartContext() //destructurar cart
  const [guardar, setGuardar] = useState([]);
  const [nombre, setNombre] = useState('');
  const [mail, setMail] = useState('');
  const [telefono, setTelefono] = useState('');


  async function generarOrden(e){
    e.preventDefault()
    let orden = {};
    orden.buyer ={
      name: nombre,
      email:mail,
      phone:telefono
    }

    orden.total = totalPrecio();
    //Generar una orden
    orden.films = cart.map((cartItem) => {
      const id = cartItem.id;
      const nombre = cartItem.title;
      const cantidadTotal = cartItem.cantidades;
      const precio = cartItem.precio*cartItem.cantidades;
      return{id,nombre,precio,cantidadTotal};
    })
    //Insertar stock
    const db = getFirestore()
    const orderCollection = collection(db,'orders');
    addDoc(orderCollection,orden)
    .then( (res) => setGuardar(res.id));


  //Actualizar stock (no es obligatorio)
  const queryCollectionStock = collection(db, 'films')
  const queryActualizarStock = await query (
      queryCollectionStock,
      where(documentId(),"in",cart.map((it) => it.id))
    );

    const batch = writeBatch(db)

    await getDocs(queryActualizarStock)
      .then((resp) => resp.docs.forEach((res) => batch.update(res.ref, {
            stock:res.data().stock - cart.find((item) => item.id === res.id).cantidades
          })
        )
      )
      .finally(() => vaciarCarrito())
    batch.commit();
  }

  return (
    <Container>
        <div className='mt-10'>
        {
        cart.map(item =>
          <div key={item.id}>
          <div className='w-10'>
          <img src={item.img} className='w-25' alt='.' />
          </div>
          <div>Nombre: {item.title}</div>
          <div>Precio unitario: {item.precio} pesos </div>
          <div>Cantidad: {item.cantidades} cantidades.</div>
          <div>Stock:{item.stock} disponible.</div>
          Subtotal:  ${item.cantidades * item.precio}
          <button type="button" onClick={()=>removeItem(item.id)} className="font-medium  text-green-600 hover:text-indigo-500">Eliminar</button>
          </div>
          ) // se realiza el mapeo de cart
        }
        </div>
        <div>
            <div> El precio total de los productos es ${totalPrecio()}</div>
            <Button variant="danger" onClick={vaciarCarrito}>Vaciar carrito total </Button>
        </div>
        <form>
        <fieldset>
        <br />
        <br />
        <h5>FORMULARIO</h5>
        <div className="mb-3">
            <label  className="form-label">Colocar su nombre completo: </label>
            <input type="text" placeholder='Nombre completo' className="form-control" id="inputNombre" aria-describedby="emailHelp"
                value={nombre} required onChange={((e) => setNombre(e.target.value))}/>
        </div>
        <div className="mb-3">
            <label className="form-label">Colocar su email: </label>
            <input type="email" placeholder='Email' className="form-control" id="inputEmail"
            value={mail} required onChange={((e) => setMail(e.target.value))}/>
        </div>
        <div className="mb-3">
            <label className="form-label">Colocar su telefono: </label>
            <input type="text" placeholder='telefono de contacto' className="form-control" id="inputTelefono"
            value={telefono} required onChange={((e) => setTelefono(e.target.value))} />
        </div>
        <button className='btn btn-primary' onClick={generarOrden}>Pagar</button>
        <Link to="/"><Button variant="success">Seguir comprando </Button></Link>
        <br />
        <br />
        </fieldset>
    </form>
        <h4> Su codigo de compra es: {guardar}</h4>
        <h5>Muchas Gracias por elegirnos!</h5>
    </Container>
  )
}
export default Cart;