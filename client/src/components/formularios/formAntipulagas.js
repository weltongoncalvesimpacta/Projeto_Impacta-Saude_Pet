import React, { useState } from 'react';
import "./formulario.css"

const FormAntipulgas = () => {
const [Antipulgas, setAntipulgas] = useState({});
const [data, setData] = useState({});

const handleSubmit = (event) => {
    console.log('Antipulgas', Antipulgas);
    console.log('data', data);
    // Lógica adicional para enviar os dados do formulário
};

return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Cadastrar Antipulgas</h2>
        <label htmlFor="nome">Selecione o pet</label>
        <select name="Pet">
            <option value="Pet">Tutti</option>
            <option value="Pet">Ozzy</option>
        </select>
        </div>
        <div>
        <label htmlFor="nomeVermifugo">Antipulga</label>
              <input
                type="text"
                name="Antipulgas"
                placeholder="nome do Antipulgas"
              />
      </div>
      <div>
        <label htmlFor="data">Data que tomou:</label>
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

export default FormAntipulgas;