import React from 'react';
export default function Moto(props) {
  return(
      <div>
          <h2>Soy una moto modelo {props.marca}</h2>
          <img src={props.imagen}
          alt="Imagen del moto"
          with="150"/>
          <p> {props.descripcion}</p>
          
      </div>
  );
}