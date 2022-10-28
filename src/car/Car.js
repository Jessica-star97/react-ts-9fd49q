import React, { useState , useEffect} from 'react';
import './Car.css';

export default function Car(props) {
  const [beepeado, setBeppeado] = useState(false);

  //Style from: https://www.w3schools.com/howto/howto_css_cards.asp



  useEffect(() => {
 //   alert("Se  va a guardar en Base de Datos");
    // codigo necesario para guardar en base de datos
 // alert("Bepeando se guardo en base de datos");

},[beepeado]);

  const estiloDivCardContenedor = {
    padding: '0px 16px 16px',
  };

  const hacerBeep = (sonido) => {
    //alert(sonido);
    setBeppeado(!beepeado);
    /*if (props.modelo.includes('C6')) {
      alert('Ku-Chaw');
    } else if (props.modelo.includes('170')) {
      alert('BEEP BEEP Mate Tom-mate');
    }*/
  };

  return (
    <div style={props.style}>
      {beepeado && <div className="bubble b r hb">{props.sonido}</div>}

      <div className="estiloDivCard">
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
          {props.anio < 1970 && (
            <img
              src="https://published-assets.ari-build.com/Content/Published/Site/26996/Images/logo.png"
              width="32"
              alt="Insignia Clásico"
            />
          )}
          <br />
          <br />
          <button className="buttonBeeb" onClick={() => hacerBeep(props.sonido)}>
            Hacer beep-beep
          </button>
        </div>
      </div>
    </div>
  );
}
