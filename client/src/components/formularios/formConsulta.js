import React, { useState } from 'react';
import "./formulario.css"

const FormConsulta = () => {
const [consulta, setConsulta] = useState({});
const [data, setData] = useState({});

const handleSubmit = (event) => {
    console.log('consulta', consulta);
    console.log('data', data);
    // Lógica adicional para enviar os dados do formulário
};

return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Cadastrar Consulta</h2>
        <label htmlFor="nome">Selecione o pet</label>
        <select name="Pet">
            <option value="Pet">Tutti</option>
            <option value="Pet">Ozzy</option>
        </select>
        </div>
        <div>
        <label htmlFor="nomeVeterinario">Veterinario</label>
              <input
                type="text"
                name="consulta"
                placeholder="nome do vermifugo"
              />
      </div>
      <div>
        <label htmlFor="data">Data da consulta:</label>
        <input
          type="date"
          id="data"
          value={data}
          onChange={(event) => setData(event.target.value)}
        />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default FormConsulta;