import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import './Itema.css';
const Item = ({info}) => {
  return (
  <div className="card" style={{width: '30rem', padding:'20px'}}>
    <img src={info.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h3 className="card-title">{info.title}</h3>
    <h4 className="card-text"> {info.precio} </h4>
    <h5 className="color"> {info.envio} </h5>
    <Link to={`/detalle/${info.id}`}>
    <h2 className="btn btn-primary"> Detalle </h2>
    </Link>
  </div>
</div>
  );
}

export default Item;