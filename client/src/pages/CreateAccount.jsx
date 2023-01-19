import React from 'react';
import '../styles/CreateAccount.scss';

function CreateAccount() {
   return (
      <div className="CreateAccount">
         <div className="CreateAccount-container">
            <h1 className="title">Mi Cuenta</h1>
            <form action="/" className="form">
               <div>
                  <label htmlFor="name" className="label">
                     Nombre
                     <input
                        type="text"
                        id="name"
                        placeholder="Teff"
                        className="input input-name"
                     />
                  </label>
                  <label htmlFor="email" className="label">
                     Correo
                     <input
                        type="text"
                        id="email"
                        placeholder="platzi@example.com"
                        className="input input-email"
                     />
                  </label>

                  <label htmlFor="password" className="label">
                     Contraseña
                     <input
                        type="password"
                        id="password"
                        placeholder="*********"
                        className="input input-password"
                     />
                  </label>
               </div>
               <input
                  type="submit"
                  value="Crear Cuenta"
                  className="primary-button login-button"
               />
            </form>
         </div>
      </div>
   );
}

export default CreateAccount;
