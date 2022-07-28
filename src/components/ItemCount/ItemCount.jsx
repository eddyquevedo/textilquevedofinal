import './item.css';
import React from 'react';
import {useState,useEffect} from 'react';

export const ItemCount = ({initial,stock,onAdd}) => { //comunicamos el initial,stock ,onAdd atraves de los props.
  const [count,setCount] = useState(parseInt(initial)); //colocamos el initial para indicar el valor inicial

  //incrementa el valor
  const incrementar = () => {
    setCount(count + 1);
  };
  //decrece el valor
  const decrecer = () => {
    setCount(count - 1);
  };
  useEffect(()=>{ //el useEffect setea el valor inicial cada vez que hayga un cambio en initial.
    setCount(parseInt(initial));
  },[initial])

  return (
    <div className='counter'>
    <button disabled={count<=1}onClick={decrecer}>-</button> {/* el disabled pone el limite a la cantidad */}
    <span>{count}</span>
    <button disabled={count>=stock}onClick={incrementar}>+</button>
    <div>
    <button disabled={stock<=0}onClick={() => onAdd(count)}>Agregar al carrito </button>
    </div>
    </div>
  );
}
export default ItemCount;