import React from 'react';
import '../styles/Login.scss';
import logo from '../assets/logos/Logo-shopping.svg';

function Login() {
   const form = React.useRef(null);

   const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(form.current);
      const data = {
         username: formData.get('email'),
         password: formData.get('password'),
      };
   };

   return (
      <div className="container-login">
         <div className="form-container">
            <img src={logo} alt="logo" className="logo-login" />
            <form action="/" className="form" ref={form}>
               <label htmlFor="email" className="label">
                  Correo Electronico
                  <input
                     type="text"
                     name="email"
                     placeholder="shopAll@example.cm"
                     className="input input-email"
                  />
               </label>
               <label htmlFor="password" className="label">
                  Contraseña
                  <input
                     type="password"
                     name="password"
                     placeholder="*********"
                     className="input input-password"
                  />
               </label>
               <button
                  onClick={(e) => handleSubmit(e)}
                  type="submit"
                  className="primary-button login-button"
               >
                  Iniciar Sesion
               </button>
               <a href="/">Olvidaste la contraseña</a>
            </form>
            <button type="button" className="secondary-button signup-button">
               Registrarse
            </button>
         </div>
      </div>
   );
}

export default Login;
