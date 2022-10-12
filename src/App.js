import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
            <h1>Hello Mundo React!</h1> 
            <Carro 
            marca= "DMC"
            imagen="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delorean-dmc-12-replica-de-regreso-al-futuro-1648985337.jpg?crop=1.00xw:0.892xh;0,0.0385xh&resize=1200:*"
            descripcion="La máquina del tiempo DeLorean, en inglés DeLorean time machine, 
            es un artefacto ficticio para viajar en el tiempo de la trilogía 
            de películas de Back to the Future, basado en el DMC DeLorean de 1981. 
            Fue inventada por el doctor Emmett Brown en 1985."
            />
             <Moto 
            marca= "Yamaha"
            imagen="https://www.yamaha-motor.com.mx/images/motos/r15_2021_1.jpg"
            descripcion="Moto modelo YZF-R15"
            />
        </div>
       
  );
}
