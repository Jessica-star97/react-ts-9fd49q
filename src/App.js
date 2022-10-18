import React , {useState , useEffect}from 'react';
import './style.css';
import Car from './car/Car.js';



export default function App() {

const personajes = [{
  nombre:"Rayo McQueen",
  modelo:"Chevrolet Corvette C6 de NASCAR",
  imagen:"https://i.ytimg.com/vi/2gRcvS2ltjE/maxresdefault.jpg",
  descripcion:"El auto mas veloz de la serie de peliculas de Cars.",
  sonido:"KuChao",
  anio:"2006"
},{
  nombre:"Mate",
        modelo:"International L-170",
        imagen:"https://www.venta-de.com.ve/sh-img/latest_grua%2Bmate%2Bcars.jpeg",
        descripcion:"El Compañero fiel del auto veloz de la pelicula Cars.",
        sonido:"BEEP BEEP Mate Chocolate",
        anio:"1960"
},
];

//const [personajes, setPersonajes] =useState();

//useEffect(()=> {
  //Realizar peticion a la API utilizando
  //setPersonajes(personajesDesdeAPI);
//},[])

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

  

      <Car
        nombre="Rayo McQueen"
        modelo="Chevrolet Corvette C6 de NASCAR"
        imagen="https://i.ytimg.com/vi/2gRcvS2ltjE/maxresdefault.jpg"
        descripcion="El auto mas veloz de la serie de peliculas de Cars."
        sonido="KuChao"
        anio="2006"
      />
      <Car
        nombre="Mate"
        modelo="International L-170"
        imagen="https://www.venta-de.com.ve/sh-img/latest_grua%2Bmate%2Bcars.jpeg"
        descripcion="El Compañero fiel del auto veloz de la pelicula Cars."
        sonido="BEEP BEEP Mate Chocolate"
        anio="1960"
      />
    </div>
  );
}
