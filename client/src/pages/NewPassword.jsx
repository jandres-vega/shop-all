import React from 'react';
import '../styles/NewPassword.scss';
const NewPassword = () => {
    return (
        <div className="NewPassword">
            <div className="NewPassword-container">
                <h1 className="title">Crear nueva contraseña</h1>
                <p className="subtitle">Ingrese una nueva contraseña</p>
                <form action="/" className="form">
                    <label htmlFor="password" className="label">Contraseña</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password"/>
                    <label htmlFor="new-password" className="label">Contraseña</label>
                    <input type="password" id="new-password" placeholder="*********" className="input input-password"/>
                    <input type="submit" value="Confirm" className="primary-button login-button"/>
                </form>
            </div>
        </div>
    );
};

export default NewPassword;