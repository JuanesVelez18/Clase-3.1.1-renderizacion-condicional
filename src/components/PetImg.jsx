import React, { useState } from 'react';

const PetImg = () => {
  const [pet, setPet] = useState('Perrito');
  /* Ejercicio: Renderizar Gatito o Perrito en base a una variable de texto que contenga lo que es */

  return (
    <>
      {pet === 'Perrito' ? (
        <div>
          <h2>{pet}</h2>
          <img
            src="https://img.freepik.com/foto-gratis/lindo-perrito-haciendose-pasar-persona-negocios_23-2148985938.jpg"
            alt=""
          />
        </div>
      ) : (
        <div>
          <h2>{pet}</h2>
          <img
            src="https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/SQT6VSTKY5ALBBK4QFI22JCWNY.jpg"
            alt=""
          />
        </div>
      )}
    </>
  );
};

export default PetImg;
