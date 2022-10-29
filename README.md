#Componente Carro.

##INFORMACION GENERAL DEL COMPONENTE
Este componente es de utilidad para agregar informacion de automoviles como una tarjeta con su datos importantes, como lo es su imagen, nombre, modelo, descripcion y su año, ademas de un boton donde realiza el sonido que hace el automovil, el que es llamado beeb beeb.

Para el uso de este se tiene dos archivos que son el carro.js,donde este forma el componente cont todas sus partes y el archivo carro.css, donde estan los estilos de el componente.

###INFORMACION DETALLADA DE ARCHIVO CARRO.JS
Se tiene una funcion llamada car donde vine todo lo que nuestro componente, en donde la primera parte de este contiene las propiedades del componente donde se realiza la accion del boton que de "Hacer beeb" donde usuando useEffect(), donde accionara el sonido que hace el auto que es con la constante llamada hacerBeep y esto usando los atributos de beepeando y setBeepeando como se ve en el codigo:


```bash
const [beepeado, setBeppeado] = useState(false);


  useEffect(() => {

},[beepeado]);

  const estiloDivCardContenedor = {
    padding: '0px 16px 16px',
  };

  const hacerBeep = (sonido) => {

    setBeppeado(!beepeado);
```

En cuanto al resto del codigo consisten un retun de lo que se mostrara en el tarjetas que muestran las informacion de los automoviles.

```bash
#Muestra el sonido que hace el auto en una burbuja.
<div style={props.style}>
      {beepeado && <div className="bubble b r hb">{props.sonido}</div>}
```
```bash
#Muestra los datos de las tarjetas con la informacion de carro(imagen,nombre,descripcion y modelo).
<img
          className="estiloImgCard"
          src={props.imagen}
          alt="Imagen del carro"
        />
        <div style={estiloDivCardContenedor}>
          <h2>{props.nombre}</h2>
          <p>
            <b>Descripción:</b> {props.descripcion}
          </p>
          <em>
            <b>Modelo:</b> {props.modelo}
          </em>
          <br />
```
```bash
#Agrega un logo de que es vintage si el año del carro es menor a 1970.
 {props.anio < 1970 && (
            <img
              src="https://published-assets.ari-build.com/Content/Published/Site/26996/Images/logo.png"
              width="32"
              alt="Insignia Clásico"
            />
          )}
```
```bash
#Boton que muestra el sonido del carro.
 <button className="buttonBeeb" onClick={() => hacerBeep(props.sonido)}>
            Hacer beep-beep
          </button>
```

###INFORMACION DETALLADA DE ARCHIVO CARRO.CSS
En esta archivo contiene la apariencia que se le dara a al componente de carro, donde cada linea de codigo es para lo siguiente:
```bash
#Estilo de la tarjeta de informacion del carro.
.estiloDivCard {
  box-shadow: 0 4px 8px 0 rgba(12, 133, 231, 0.2);
  border-radius: 5px;
  max-width: 300px;
  margin: auto;
  background: #E9B49D;
}
```
```bash
#Estilo del button de "Hacer beeb beeb"
.buttonBeeb{
  background:#E3D2CE;
  border: 0.5vmin solid rgba(116, 98, 80, 0.938);
  font-family: 'Comic Neve';
}
```
```bash
#Estilo de la imagen del carro.
.estiloImgCard {
  width: 100%;
  border-radius: 5px 5px 0 0;
}

```
```bash
#Estilo del borde de la burbuja de sonido del carro.
.b {
  border: 0.5vmin solid rgb(122, 198, 248);
}

.r {
  border-radius: 100%;
}
```
```bash
#Estilo de la burbuja que se muestra con el sonido del carro.
.bubble {
  width: 40%;
  height: 25%;
  left: 73%;
  top: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 3vmin;
  background:#B1CFEA;
  box-shadow: 0 -0.25vmin, 0 0.125vmin;
  font-family: 'Comic Sans', 'Comic Neue', sans-serif;
}
```


Como pueden ver no es tan complicado de entender como funciona, para usarlo solo crea una archivo referenciando a los archivos correspondientes y a su artributos de la tarjeta del carro, ademas de agregar los imports correspondientes, el que seria similar a la siguiente ejemplo:
```bash
import React , {useState , useEffect}from 'react';
import './style.css';
import Car from './car/Carro.js';

export default function App() {
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
}
```
Y podras usar el componente, buena suerte :)




