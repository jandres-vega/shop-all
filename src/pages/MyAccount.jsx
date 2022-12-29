import React from 'react';
import '../styles/MyAccount.scss';
const MyAccount = () => {
    return (
        <div className="MyAccount">
            <div className="MyAccount-container">
                <h1 className="title">Mi cuenta</h1>
                <form action="/" className="form-my-account">
                    <div>
                        <label htmlFor="name" className="label">Nombre</label>
                        <p className="value">Andres Vega</p>
                        <label htmlFor="email" className="label">Correo</label>
                        <p className="value">andre@gmail.com</p>
                        <label htmlFor="password" className="label">Contraseña</label>
                        <p className="value">*********</p>
                    </div>
                    <input type="submit" value="Editar" className="secondary-button login-button"/>
                </form>
            </div>
        </div>
    );
};

export default MyAccount;