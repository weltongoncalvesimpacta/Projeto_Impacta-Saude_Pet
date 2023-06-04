import React, { useState } from 'react';
import "./formulario.css"

const FormMedicamentos = () => {
const [vermifugo, setVermifugo] = useState({});
const [data, setData] = useState({});
const [dias, setDias] = useState({});

const handleSubmit = (event) => {
    console.log('vermifugo', vermifugo);
    console.log('data', data);
    // Lógica adicional para enviar os dados do formulário
};

return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Cadastrar Medicamentos</h2>
        <label htmlFor="nome">Selecione o pet</label>
        <select name="Pet">
            <option value="Pet">Tutti</option>
            <option value="Pet">Ozzy</option>
        </select>
        </div>
        <div>
        <label htmlFor="nomeMedicamento">Medicamento</label>
              <input
                type="text"
                name="medicamento"
                placeholder="nome do medicamento"
              />
      </div>
      <div>
        <label htmlFor="data">Data inicio:</label>
        <input
          type="date"
          id="data"
          value={data}
          onChange={(event) => setData(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="data">Quantos dias?</label>
        <input
          type="number"
          id="dias"
          value={dias}
          onChange={(event) => setDias(event.target.value)}
        />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default FormMedicamentos;