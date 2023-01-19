import React from 'react';
import '../styles/Paginado.scss';

function Paginado({ paginado, productsByPag, products }) {
   const paginadoNumbers = [];

   for (let i = 1; i <= Math.ceil(products.length / productsByPag); i += 1) {
      paginadoNumbers.push(i);
   }
   return (
      <div className="container-paginado">
         <ul>
            {paginadoNumbers.map((num) => (
               <li key={num} aria-hidden="true" onClick={() => paginado(num)}>
                  <span>{num}</span>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default Paginado;
