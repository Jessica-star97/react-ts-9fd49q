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
        nombre="Delorean"
        modelo="DMC"
        sonido="RomRom"
        imagen="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delorean-dmc-12-replica-de-regreso-al-futuro-1648985337.jpg?crop=1.00xw:0.892xh;0,0.0385xh&resize=1200:*"
        descripcion="La máquina del tiempo DeLorean, en inglés DeLorean time machine, 
        es un artefacto ficticio para viajar en el tiempo de la trilogía 
        de películas de Back to the Future, basado en el DMC DeLorean de 1981. 
        Fue inventada por el doctor Emmett Brown en 1985."
        anio="1981"
      />

<Car
        nombre="Quantum"
        modelo="EU"
        imagen="https://www.elcarrocolombiano.com/wp-content/uploads/2019/10/20191012-QUANTUM-E2-CARRO-ELECTRICO-HECHO-EN-BOLIVIA-01.jpg"
        descripcion="Quantum, es un citycar eléctrico"
        sonido="BIIBB"
        anio="2022"
      />



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
