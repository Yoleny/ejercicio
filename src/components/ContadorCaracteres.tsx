import React, { useState, useEffect } from 'react';

const ContadorCaracteres: React.FC = () => {
 
  const [texto, setTexto] = useState<string>('');
  const [contadorTexto, setContadorTexto] = useState(0)
  const [color, setColor] = useState<string>('red'); 

  const manejarCambio = (evento: React.ChangeEvent<HTMLInputElement>) => {
    setTexto(evento.target.value);
  };

 
  useEffect(() => {

    const contadorTexto= texto.length;
    setContadorTexto(contadorTexto);


    if (texto.length < 10) {
      setColor('red');
    } else if (texto.length >= 10 && texto.length <= 20) {
      setColor('orange');
    } else {
      setColor('green');
    }
  }, [texto]); 

  return (

    <div>
         <h1>Contador de letras</h1>
      <input 
        type="text" 
        value={texto} 
        onChange={manejarCambio} 
        
      />
      <p style={{ color: color }}> La cantidad de letras ingresadas es :  {contadorTexto}</p> 
    </div>
  );
};

export default ContadorCaracteres;