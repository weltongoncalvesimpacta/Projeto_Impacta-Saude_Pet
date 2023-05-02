const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "projeto_pet",
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const {nome} = req.body;
    const {raca} = req.body;
    const {idade} = req.body;
    const {sexo} = req.body;


    let mysql = "INSERT INTO pet (nome, raca, idade, sexo) VALUES (?, ?, ?, ?)";

    db.query(mysql, [nome, raca, idade, sexo], (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });
});

app.get("/getCards", (req, res) => {

    let mysql = "SELECT * from pet";

    db.query(mysql, (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });
});

app.put("/edit", (req, res) => {
    const {id} = req.body;
    const {nome} = req.body;
    const {raca} = req.body;
    const {idade} = req.body;
    const {sexo} = req.body;

    let mysql = "UPDATE pet SET nome = ?, raca = ?, idade = ?, sexo = ? WHERE idpet = ?";

    db.query(mysql, [nome, raca, idade, sexo, id], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});

app.delete("/delete/:idpet", (req, res) => {
    const { id } = req.params;

    let mysql = "DELETE FROM pet WHERE idpet = ?";

    db.query(mysql, [id], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});

app.listen(3001, () => {
    console.log("rodando servidor");
});

