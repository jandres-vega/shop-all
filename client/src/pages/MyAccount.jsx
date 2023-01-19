import React from 'react';
import '../styles/MyAccount.scss';

function MyAccount() {
   return (
      <div className="MyAccount">
         <div className="MyAccount-container">
            <h1 className="title">Mi cuenta</h1>
            <form action="/" className="form-my-account">
               <div>
                  <span className="label">
                     Nombre
                     <p className="value">Andres Vega</p>
                  </span>
                  <span className="label">
                     Correo
                     <p className="value">andre@gmail.com</p>
                  </span>
                  <span className="label">Contraseña</span>
                  <p className="value">*********</p>
               </div>
               <input
                  type="submit"
                  value="Editar"
                  className="secondary-button login-button"
               />
            </form>
         </div>
      </div>
   );
}

export default MyAccount;
