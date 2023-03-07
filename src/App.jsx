import React, { useState } from 'react';
import PetImg from './components/PetImg';

const App = () => {
  const [condition, setCondition] = useState(true);
  const [condition2, setCondition2] = useState(false);

  const getJsx = () => {
    if (condition) {
      return <p className="text-green-400">Eres admin</p>;
    } else if (condition2) {
      return <h3 className="text-yellow-400">Eres espectador</h3>;
    } else {
      return <h4>Opps, no tienes permisos</h4>;
    }
  };

  return (
    <div className="h-full flex flex-col justify-center items-center p-10 text-white text-4xl">
      {/* Renderizado condicional con &&: primero la condición y luego el elemento JSX a renderizar*/}
      {/* {condition && <p>Hola</p>}
      {!condition && <p>Adios</p>} */}

      {/* Renderizado condicional con operador ternario (?:): nos permite renderizar dos elementos de forma alternada en relación a la condición */}
      {/* {condition ? (
        <p className="text-green-400">Eres admin</p>
      ) : (
        <h3 className="text-rose-400">Opps, no tienes permisos</h3>
      )} */}

      {/* Renderizado condicional con funciones: nos permite una flexibilidad mayor para decidir que renderizar y se usa ejecutando  */}
      {getJsx()}

      <button onClick={() => setCondition(!condition)} className="text-xl mt-5">
        Change Condition
      </button>
      <button onClick={() => setCondition2(!condition2)} className="text-xl mt-5">
        Change Condition 2
      </button>

      <PetImg />
    </div>
  );
};

export default App;
