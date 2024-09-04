import React from "react";

function FormRegister() {
  return (
    <div className="register-container">
      <form className="register-form">
        <h2>Registro</h2>
        <div className="form-group">
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            placeholder="Ingresa tu usuario"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="Ingresa tu correo electrónico"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirma tu contraseña"
            required
          />
        </div>
        <button type="submit" className="btn-register">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default FormRegister;


