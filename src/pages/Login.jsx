import React from 'react';
import '../styles/Login.scss';
import logo from '../assets/logos/Logo-shopping.svg';
const Login = () => {

    const form = React.useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password'),
        }
        console.log(data)
    }

    return (
        <div className="container-login">
            <div className="form-container">
                <img src={logo} alt="logo" className="logo-login" />
                <form action="/" className="form" ref={form}>
                    <label htmlFor="email" className="label">Correo Electronico</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="shopAll@example.cm"
                        className="input input-email"
                    />
                    <label htmlFor="password" className="label">Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="*********"
                        className="input input-password"
                    />
                    <button onClick={(e) => handleSubmit(e)} type="submit" className="primary-button login-button">
                        Iniciar Sesion
                    </button>
                    <a href="/">Olvidaste la contraseña</a>
                </form>
                <button className="secondary-button signup-button">Registrarse</button>
            </div>
        </div>
    );
};

export default Login;