import React from "react";
import "./card.css";
import FormDialog from "../dialog/dialog";

export default function Card(props) {
const [open, setOpen] = React.useState(false);

const handleClickCard = () => {
    setOpen(true);
};

    return (
        <>
        <FormDialog 
            open={open} 
            setOpen={setOpen}
            nome={props.nome}
            raca={props.raca}
            idade={props.idade}
            sexo={props.sexo}
            ListCard={props.ListCard}
            setListCard={props.setListCard}
            id={props.idpet}
        />
        <div className="card--container" onClick={() =>
        handleClickCard()}>
            <h1 className="card--tittle">Nome:{props.nome}</h1>
            <p className="card--raca">Raça:{props.raca}</p>
            <p className="card--idade">Idade:{props.idade}</p>
            <p className="card--sexo">Sexo:{props.sexo}</p>
        </div>
        </>
    );
};