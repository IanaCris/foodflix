import React from 'react';
import { Link } from 'react-router-dom';
import img404 from '../../assets/img/404.jpg';

export default function Pagina404() {
  return (
    <>
      <Link to="/"> 
        Voltar para Home
      </Link>
      <img className="Error404" src={img404} style={{ width: 500 }} alt="Error404" />
    </>
  );
}