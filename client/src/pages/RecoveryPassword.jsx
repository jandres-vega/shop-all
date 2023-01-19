import React from 'react';
import '../styles/RecoveryPassword.scss';
import logo from '../assets/logos/Logo-shopping.svg';

function RecoveryPassword() {
   return (
      <div className="PasswordRecovery">
         <div className="PasswordRecovery-container">
            <img src={logo} alt="logo" className="logo-password" />
            <h3 className="title">Recuperar Contraseña</h3>
            <p className="subtitle">
               Informar la dirección de correo electrónico utilizada para
               recuperar su cuenta
            </p>
            <form action="/" className="form">
               <label htmlFor="email" className="label">
                  Correo Electronico
                  <input type="text" id="email" className="input input-email" />
               </label>
               <input
                  type="submit"
                  value="Confirmar"
                  className="primary-button login-button"
               />
            </form>
         </div>
      </div>
   );
}

export default RecoveryPassword;
