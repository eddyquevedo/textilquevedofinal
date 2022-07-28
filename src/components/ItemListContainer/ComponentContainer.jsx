import React,{useState,useEffect} from 'react'
// import { getFetch } from '../../helpers/getData';
import ItemList from '../ItemList/Itemlist'
import {useParams} from 'react-router-dom';
import {collection,getDocs, getFirestore, query, where} from 'firebase/firestore'

const ComponentContainer = ({saludo}) => {
  const [data,setData] = useState([]); // el estado es data se inicia en un array vacio y con su setData pasan a ser una raiz de objetos luego se envia a itemlist.
  const {categoriaId} =useParams();


//Traer todos y filtrados
useEffect(() => {
        const db = getFirestore ();
        const queryCollection = collection(db,'films');

  if (categoriaId) {
        const queryCollectionFilter = query(queryCollection,where('categoria','==',categoriaId));
        getDocs(queryCollectionFilter)
        .then((dataRes) => setData(dataRes.docs.map((film) =>({ id: film.id, ...film.data() })))
        )
        .catch(err => console.log(err));
  }else{
      getDocs(queryCollection)
        .then(dataRes => setData(dataRes.docs.map(film =>({ id: film.id, ...film.data()}))))
          .catch(err => console.log(err));
        }
},[categoriaId]);
console.log(data);

  return (
    <div>
        <h2>{saludo}</h2>
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
        <ItemList data ={data}/>
        </div>
    </div>
  )
}

export default ComponentContainer
