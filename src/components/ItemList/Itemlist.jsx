import React from 'react';
import Item from '../Item/Item';

const ItemList = ({data =[]}) => { //se captura la data en un array vacio de objetos
  return (
    data.map(film => <Item key={film.id} info={film}/>) // Por cada objeto que se envio se crea un item con su key y su informacion.
    );
}

export default ItemList;
