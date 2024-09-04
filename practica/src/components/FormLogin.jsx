import React from "react";



function FormLogin() {
    return(
        <div className="login-container">
      <form className="login-form">
        <h2>Iniciar Sesión</h2>
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
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>
        <button type="submit" className="btn-login">
          Ingresar
        </button>
      </form>
    </div>
    )
}

export default FormLogin