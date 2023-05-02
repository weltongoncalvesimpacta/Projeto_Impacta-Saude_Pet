import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from "axios";
import Card from './components/cards/card';

function App() {
  const [values, setValues] = useState();
  const [listPets, setListPets] = useState([]);
  console.log(listPets);
  const handleaddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", {
      nome: values.name,
      raca: values.raca,
      idade: values.idade,
      sexo: values.sexo,
    }).then(() => {
      
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListPets(response.data);
    });
  }, []);


  return (
  <><header>
    <p>SAUDE PET</p>
    </header>
    <nav>
      <ul class="menu">
        <li><a href="#">Cadastrar Pet</a></li>
        <li><a href="#">Selecionar Pet</a></li>
        <li><a href="#">Cadastrar na agenda</a>
          <ul>
            <li><a href="#">Vermifugo</a></li>
            <li><a href="#">Vacinas</a></li>
            <li><a href="#">Consulta</a></li>
            <li><a href="#">Medicamentos</a></li>
            <li><a href="#">Antipulga</a></li>
          </ul>
        </li>
        <li><a href="#">Links</a></li>
        <li><a href="#">Anotações</a></li>
      </ul>
    </nav><body>
        <div className="register-container">
          <p className="register-name">Cadastrar Pet</p>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="register-input"
            onChange={handleaddValues} />
          <input
            type="text"
            placeholder="Raça"
            name="raca"
            className="register-input"
            onChange={handleaddValues} />
          <input
            type="text"
            placeholder="Idade"
            name="idade"
            className="register-input"
            onChange={handleaddValues} />

          <input
            type="text"
            placeholder="Sexo"
            name="sexo"
            className="register-input"
            onChange={handleaddValues} />

          <button className="register-button"
            onClick={() => handleClickButton()}>Cadastrar</button>
        </div>

        {typeof listPets !== "undefined" &&
          listPets.map((value) => {
            return <Card
              key={value.id}
              Listcard={listPets}
              setListPets={setListPets}
              id={value.id}
              nome={value.nome}
              raca={value.raca}
              idade={value.idade}
              sexo={value.sexo}
            ></Card>;
          })};
      </body></>
);
}

export default App;
