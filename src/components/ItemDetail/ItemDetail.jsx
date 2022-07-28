import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {useCartContext } from '../../contexts/cartContext';
import {Button} from 'react-bootstrap';

const ItemDetail = ({data}) => {
  const {cart,addToCart} = useCartContext () //importo directamente el contexto usado
  const [estado,setEstado] = useState();

  const onAdd = (cantidad) =>{ //la funcion onAdd indica la cantidad que el usuario escogio al final
    console.log(`Tienes ${cantidad} unidades`); // el valor de 'cantidad' es de count osea que viene del hijo(ItemCount) para poder controlarlo en el padre(ComponentContainer).
    setEstado(cantidad)
    addToCart({...data, cantidades:cantidad}) //se crea un objeto nuevo con las cantidades.
  }
  console.log(cart)

  return (
    <div className="container">
    <div className="detail">
      <img src={data.img} className="detail_image" alt="..." />
      <div className="content">
            <h1>{data.title}</h1>
            <h3>Categoria: {data.categoria2}</h3>
            <h4>Tecnologia: {data.tecnologia}</h4>
            <h4>Cantidad de funciones de puntada: {data.puntos}</h4>
            <h4>stock: {data.stock}</h4>
            <h3 className='color_precio'> Precio Unitario: ${data.precio}</h3>
        <div>
        {estado?(
          <Link to ='/'>
          <Button variant="success"> Seguir Comprando </Button>
          <Link to='/cart'>
          <Button className="btn btn-primary">Ir al Carrito </Button>
          </Link>
          </Link>
          ):(
          <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default ItemDetail;
