import React from 'react';

export default function Carro(props) {
    const estiloDivCar= {
      boxShadow: '0 4px 8px 0 rgba(0,0,0.2)',
        backgroundColor: "lightblue",
        fontFamily:"Sans-Serif"
    };
   
  const estiloImgCard ={
    with: '100%'
  }

    const estiloH2 ={
        color:"red"
    };


    return(
        <div style={estiloDiv}> {/*Esto es un comentario*/}
            <h2 style= {estiloH2}>Soy un carro modelo {props.marca}</h2>
            <img src={props.imagen}
            alt="Imagen del carro"
            />
            <p> {props.descripcion}</p>
            
        </div>
    );
}