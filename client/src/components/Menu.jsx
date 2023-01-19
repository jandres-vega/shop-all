import React from 'react';
import '../styles/Menu.scss';

function Menu() {
   return (
      <div className="menu-head">
         <ul>
            <li>
               <a href="/" className="title">
                  Mis ordenes
               </a>
            </li>

            <li>
               <a href="/">Mi cuenta</a>
            </li>

            <li>
               <a href="/">Cerrar sesion</a>
            </li>
         </ul>
      </div>
   );
}

export default Menu;
