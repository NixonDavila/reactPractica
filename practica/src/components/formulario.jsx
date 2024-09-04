import React from "react";
import "../styles/formulario.css"; // Importa el archivo CSS para el formulario

function Form() {
  return (
    <form className="form-container">
      <h2>Formulario de Contacto</h2>

      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          placeholder="Ingresa tu nombre"
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
        <label htmlFor="telefono">Teléfono</label>
        <input
          type="tel"
          id="telefono"
          placeholder="Ingresa tu número de teléfono"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="fecha">Fecha de Nacimiento</label>
        <input
          type="date"
          id="fecha"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="genero">Género</label>
        <select id="genero" required>
          <option value="">Selecciona tu género</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          placeholder="Escribe tu mensaje"
          rows="4"
          required
        ></textarea>
      </div>

      <button type="submit" className="btn-submit">
        Enviar
      </button>
    </form>
  );
}

export default Form;
