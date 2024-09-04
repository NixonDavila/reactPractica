import React from "react";
import "../styles/tabla.css"; // Importa el archivo CSS para la tabla

function Table() {
  return (
    <div className="table-container">
      <h2>Lista de Usuarios</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo Electrónico</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Juan Pérez</td>
            <td>juan.perez@example.com</td>
            <td>28</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ana García</td>
            <td>ana.garcia@example.com</td>
            <td>34</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Carlos Martínez</td>
            <td>carlos.martinez@example.com</td>
            <td>45</td>
          </tr>
          <tr>
            <td>4</td>
            <td>María Rodríguez</td>
            <td>maria.rodriguez@example.com</td>
            <td>22</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
