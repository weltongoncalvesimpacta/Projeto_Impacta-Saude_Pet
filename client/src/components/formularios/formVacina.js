import React, { useState } from 'react';
import "./formulario.css"

const Formulario = () => {
const [vacina, setVacina] = useState({});
const [data, setData] = useState({});

const handleSubmit = (event) => {
    console.log('vacina', vacina);
    console.log('data', data);
    // Lógica adicional para enviar os dados do formulário
};

return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Cadastrar Vacina</h2>
        <label htmlFor="nome">Selecione o pet</label>
        <select name="Pet">
            <option value="Pet">Tutti</option>
            <option value="Pet">Ozzy</option>
        </select>
        </div>
        <div>
        <label htmlFor="vacina">Tipo de vacina</label>
        <select name="vacina"
         type="text"
         id="vacina"
         onChange={(event) => setVacina(event.target.value)}>
            <option value="multipla">múltipla ou polivalente</option>
            <option value="raiva">antirrábica(raiva)</option>
            <option value="gripe">gripe</option>
        </select>
      </div>
      <div>
        <label htmlFor="data">Data de aplicação</label>
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

export default Formulario;
